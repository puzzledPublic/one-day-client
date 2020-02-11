import React from 'react';
import styled from 'styled-components';
import ArticleItem from './ArticleItem';
import { ArticleInfoList } from './BoardTemplate';


const ArticleListBlock = styled.ul`
  margin: 20px 0 ;
`;

interface ArticleListProp {
  articleInfoList: ArticleInfoList;
}

function ArticleList({articleInfoList}: ArticleListProp) {
  return (
    <ArticleListBlock>
      {/* TODO:: 목록 레이아웃 손보기. */}
      {articleInfoList.map(articleInfo => <ArticleItem key={articleInfo.id} info={articleInfo}/>)}
    </ArticleListBlock>
  );
}

export default ArticleList;