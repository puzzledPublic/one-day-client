import React from "react";
import styled from "styled-components";
import { ArticleItemType } from "../../containers/board/ArticleListContainer";

const ArticleItemBlock = styled.li`
  display: flex;
  padding: 10px 0 ;
  border-bottom: 1px solid #bbb;
  :first-child {
    border-top: 1px solid #bbb;
    font-weight: bold;
  }
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

function ArticleItem({ item }: { item: ArticleItemType }) {
  const { id, title, nickName, time, views } = item;
  return (
    <ArticleItemBlock>
      <ArticleTitle>
        <span>{title}</span>
      </ArticleTitle>
      <ArticleNickName>
        <span>{nickName}</span>
      </ArticleNickName>
      <ArticleViewCount>
        <span>{views}</span>
      </ArticleViewCount>
      <ArticleTime>
        <span>{time}</span>
      </ArticleTime>
    </ArticleItemBlock>
  );
}

export default ArticleItem;
