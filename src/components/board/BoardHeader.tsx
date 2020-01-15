import React from "react";
import styled from "styled-components";

const BoardHeaderBlock = styled.div``;

const BoardHeaderTitle = styled.h2`
  font-size: 3rem;
  display: inline-block;
  border-bottom: 1px solid #bbb;
`;

function BoardHeader({ boardName }: { boardName: string }) {
  return (
    <BoardHeaderBlock>
      <BoardHeaderTitle>{boardName}</BoardHeaderTitle>
    </BoardHeaderBlock>
  );
}

export default BoardHeader;
