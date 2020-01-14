import React from 'react';

import {ArticleItemList} from '../../containers/board/ArticleListContainer';
import styled from 'styled-components';
import ArticleItem from './ArticleItem';

const ArticleListBlock = styled.ul``;


function ArticleList({articleItems}: {articleItems: ArticleItemList}) {
  return (
    <ArticleListBlock>
      {articleItems.map(articleItem => <ArticleItem item={articleItem}/>)}
    </ArticleListBlock>
  );
}

export default ArticleList;