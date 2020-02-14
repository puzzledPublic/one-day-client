import React from "react";
import styled from "styled-components";
import { ArticleInfo } from "./BoardTemplate";
import { Link } from "react-router-dom";
import {getWrittenTime} from '../../lib/util';

const ArticleItemBlock = styled.li`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid #bbb;
  transition: all 0.2s;
  :hover {
    background-color: #efefef;
  }
`;

const ArticleTitle = styled.div`
  margin-left: 1rem;
  flex: 1;
`;

const ArticleViewCount = styled.div`
  flex-basis: 10rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ArticleNickName = styled.div`
  flex-basis: 10rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ArticleTime = styled.div`
  flex-basis: 5rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

function ArticleItem({ info }: { info: ArticleInfo }) {
  const { id, title, userName, replyCount, hits, dates } = info;

  return (
    <ArticleItemBlock>
      <ArticleTitle>
        <StyledLink to={`/article/${id}`}><span>{`${title}[${replyCount}]`}</span></StyledLink>
      </ArticleTitle>
      <ArticleNickName>
        <span>{userName}</span>
      </ArticleNickName>
      <ArticleViewCount>
        <span>{hits}</span>
      </ArticleViewCount>
      <ArticleTime>
        <span>{getWrittenTime(new Date(dates.createdAt))}</span>
      </ArticleTime>
    </ArticleItemBlock>
  );
}

export default ArticleItem;
