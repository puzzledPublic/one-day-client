import React from "react";
import styled from "styled-components";
import ArticleItem from "./ArticleItem";
import { ArticleInfoList } from "./BoardTemplate";

const ArticleListBlock = styled.ul`
  margin: 20px 0;
`;

interface ArticleListProp {
  articleInfoList: ArticleInfoList | null;
}

function ArticleList({ articleInfoList }: ArticleListProp) {
  return (
    <ArticleListBlock>
      {/* TODO:: 목록 레이아웃 손보기. */}
      {articleInfoList && articleInfoList.length > 0 ? (
        articleInfoList.map(articleInfo => (
          <ArticleItem key={articleInfo.id} info={articleInfo} />
        ))
      ) : (
        <div>
          <p>글이 존재하지 않습니다.</p>
        </div>
      )}
    </ArticleListBlock>
  );
}

export default ArticleList;
