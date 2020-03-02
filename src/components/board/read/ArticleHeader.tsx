import React from "react";
import { DateInfo } from "../BoardTemplate";
import styled from "styled-components";
import { printDate } from "../../../lib/util";
import { ArticleMode, READ, EDIT } from "./ArticleTemplate";
import Input from "../../common/Input";

interface ArticleHeaderProp {
  title: string;
  dates: DateInfo;
  hits: number;
  mode: ArticleMode;
  editTitle: string;
  setEditTitle: React.Dispatch<React.SetStateAction<string>>;
}

const ArticleHeaderBlock = styled.h2`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bbb;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
`;
const ArticleTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

function ArticleHeader({ title, dates, hits, mode, editTitle, setEditTitle }: ArticleHeaderProp) {
  const createdAt = new Date(dates.createdAt);
  return (
    <ArticleHeaderBlock>
      {mode === READ && (
        <>
          <ArticleTitle>{title}</ArticleTitle>
          <div>
            <div>날짜: {printDate(createdAt)}</div>
            <div>조회수: {hits}</div>
          </div>
        </>
      )}
      {mode === EDIT && <Input value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>}
    </ArticleHeaderBlock>
  );
}

export default ArticleHeader;
