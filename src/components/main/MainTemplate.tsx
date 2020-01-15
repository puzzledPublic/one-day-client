import React from 'react';
import styled from 'styled-components';
import MainSidebar from './MainSidebar';
import MainSection from './MainSection';

const MainTemplateBlock = styled.div`
    padding: 3em 14em;
    display: flex;
`;


function MainTemplate() {
  return (
      <MainTemplateBlock>
        <MainSidebar/>
        <MainSection/>
      </MainTemplateBlock>
  );
}

export default MainTemplate;