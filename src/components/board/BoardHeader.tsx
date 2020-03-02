import React from "react";
import styled from "styled-components";

interface BoardHeaderProp {
  boardDisplayName: string;
}

const BoardHeaderBlock = styled.div``;

const BoardHeaderTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  display: inline-block;
  border-bottom: 1px solid #bbb;
`;

function BoardHeader({ boardDisplayName }: BoardHeaderProp) {
  return (
    <BoardHeaderBlock>
      <BoardHeaderTitle>{boardDisplayName}</BoardHeaderTitle>
    </BoardHeaderBlock>
  );
}

export default BoardHeader;
