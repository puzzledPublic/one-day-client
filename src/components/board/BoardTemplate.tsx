import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ArticleListContainer from "../../containers/board/ArticleListContainer";
import BoardFooter from './BoardFooter';
import BoardHeader from './BoardHeader';

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
