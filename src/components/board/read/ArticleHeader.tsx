import React from "react";
import { ArticleDate } from "../BoardTemplate";
import styled from "styled-components";
import { printDate } from "../../../lib/util";

interface ArticleHeaderProp {
  title: string;
  dates: ArticleDate;
  hits: number;
}

const ArticleHeaderBlock = styled.h2`
    display: flex;
    justify-content:space-between;
    border-bottom: 1px solid #bbb;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
`;
const ArticleTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
`;

function ArticleHeader({ title, dates, hits }: ArticleHeaderProp) {
  const createdAt = new Date(dates.createdAt);
  return (
    <ArticleHeaderBlock>
      <ArticleTitle>{title}</ArticleTitle>
      <div>
        <div>날짜: {printDate(createdAt)}</div>
        <div>조회수: {hits}</div>
      </div>
    </ArticleHeaderBlock>
  );
}

export default ArticleHeader;
