import React from "react";
import styled from "styled-components";
import { ArticleInfo } from "./BoardTemplate";

const ArticleItemBlock = styled.li`
  display: flex;
  padding: 10px 0 ;
  border-bottom: 1px solid #bbb;
  transition: all 0.2s;
  :hover {
    background-color: #efefef;
  }
`;

const ArticleTitle = styled.div`
  flex: 1;
`;

const ArticleViewCount = styled.div`
  flex-basis: 100px;
  text-align: center;
`;

const ArticleNickName = styled.div`
  flex-basis: 100px;
  text-align: center;
`;

const ArticleTime = styled.div`
  flex-basis: 50px;
  text-align: center;
`;

function ArticleItem({ info }: { info: ArticleInfo }) {
  const { id, title, userName, replyCount, hits, dates } = info;
  return (
    <ArticleItemBlock>
      <ArticleTitle>
        <span>{title}</span>
      </ArticleTitle>
      <ArticleNickName>
        <span>{userName}</span>
      </ArticleNickName>
      <ArticleViewCount>
        <span>{hits}</span>
      </ArticleViewCount>
      <ArticleTime>
        <span>{dates.createdAt}</span>
      </ArticleTime>
    </ArticleItemBlock>
  );
}

export default ArticleItem;
