import React from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import { PageInfo } from "./BoardTemplate";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const BoardFooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface BoardFooterProp {
  currentPage: number;
  pageInfo: PageInfo | null;
  boardName: string;
}

function BoardFooter({ currentPage, pageInfo, boardName }: BoardFooterProp) {
  return (
    <BoardFooterBlock>
      <Button color="secondary">검색</Button>
      {pageInfo && (
        <Pagination
          currentPage={currentPage}
          totalPages={pageInfo.totalPages}
        />
      )}
      <Button color="primary"><Link to={`/write?boardName=${boardName}`}>글쓰기</Link></Button>
    </BoardFooterBlock>
  );
}

export default BoardFooter;
