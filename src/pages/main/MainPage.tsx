import React from 'react';
import styled from 'styled-components';
import HeaderTemplate from '../../components/header/HeaderTemplate';
import MainTemplate from '../../components/main/MainTemplate';
import LoginPage from './LoginPage';
import { Switch, Route } from 'react-router-dom';

const MainPageBlock = styled.div`
  padding-top: 4em;
`;

function MainPage() {
  return (
    <MainPageBlock>
        <HeaderTemplate/>
        <Switch>
          <Route path="/" component={MainTemplate} exact />
          <Route path="/board" component={MainTemplate} />
          <Route path="/login" component={LoginPage}/>
          <Route path="/signup" component={LoginPage}/>
        </Switch>
        <div>footer</div>
    </MainPageBlock>
  );
}

export default MainPage;