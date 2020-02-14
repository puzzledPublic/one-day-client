import React from "react";
import styled from "styled-components";
import ArticleItem from "./ArticleItem";
import { ArticleInfoList } from "./BoardTemplate";

const ArticleListBlock = styled.ul`
  margin: 20px 0;
  min-height: 44rem;
`;

const ArticleListHeader = styled.li`
  display: flex;
  border-bottom: 1px solid #bbb;
  padding-bottom: 1rem;
  font-weight: bold;
  .title {
    flex: 1;
  }
  .writer,.hits,.date {
    text-align: center;
  }
  .writer,.hits {
    flex-basis: 10rem;
  }
  .date {
    flex-basis: 5rem;
  }
`;

interface ArticleListProp {
  articleInfoList: ArticleInfoList | null;
}

function ArticleList({ articleInfoList }: ArticleListProp) {
  return (
    <ArticleListBlock>
      <ArticleListHeader>
        <div className="title">제목</div>
        <div className="writer">글쓴이</div>
        <div className="hits">조회수</div>
        <div className="date">날짜</div>
      </ArticleListHeader>
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
