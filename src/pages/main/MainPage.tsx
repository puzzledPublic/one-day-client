import React from 'react';
import styled from 'styled-components';
import HeaderTemplate from '../../components/header/HeaderTemplate';
import MainTemplate from '../../components/main/MainTemplate';

const MainPageBlock = styled.div`
`;

function MainPage() {
  return (
    <MainPageBlock>
        <HeaderTemplate/>
        <MainTemplate/>
    </MainPageBlock>
  );
}

export default MainPage;