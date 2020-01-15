import React from "react";
import styled from "styled-components";
import Pagenation from './Pagenation';

const BoardFooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

function BoardFooter() {
  return (
    <BoardFooterBlock>
      <div>left</div>
      <Pagenation />
      <div>right</div>
    </BoardFooterBlock>
  );
}

export default BoardFooter;
