import React from 'react';
import styled from 'styled-components';
import MainSidebar from './MainSidebar';
import ArticleListContainer from '../../containers/board/ArticleListContainer';

const MainTemplateBlock = styled.div`
    background-color: skyblue;
    margin-top: 4em;
    padding: 3em 5em;
    display: flex;
`;


function MainTemplate() {
  return (
      <MainTemplateBlock>
        <MainSidebar/>
        <ArticleListContainer/>
      </MainTemplateBlock>
  );
}

export default MainTemplate;