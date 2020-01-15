import React from 'react';

import {ArticleItemList} from '../../containers/board/ArticleListContainer';
import styled from 'styled-components';
import ArticleItem from './ArticleItem';

const ArticleListBlock = styled.ul`
  margin: 20px 0 ;
`;

function ArticleList({articleItems}: {articleItems: ArticleItemList}) {
  return (
    <ArticleListBlock>
      <ArticleItem item={{id:0, title:'제목', nickName:'이름', contents:'내용', time:'등록일', views:'조회수'}} />
      {articleItems.map(articleItem => <ArticleItem item={articleItem}/>)}
    </ArticleListBlock>
  );
}

export default ArticleList;