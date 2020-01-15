import React from "react";
import styled from "styled-components";
import BoardHeader from './BoardHeader';
import ArticleListContainer from "../../containers/board/ArticleListContainer";
import { useLocation, useParams } from "react-router-dom";
import BoardFooter from './BoardFooter';

const BoardTemplateBlock = styled.div`
    padding: 20px 30px;
    background-color: white;
    border-radius: 10px;
    
`;

function BoardTemplate() {
  const {boardName} = useParams<{boardName:string}>();
  return <BoardTemplateBlock>
    <BoardHeader boardName={boardName}/>
    <ArticleListContainer/>
    <BoardFooter/>
  </BoardTemplateBlock>;
}

export default BoardTemplate;
