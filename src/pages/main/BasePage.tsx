import React from 'react';
import styled from 'styled-components';
import HeaderTemplate from '../../components/header/HeaderTemplate';
import MainTemplate from '../../components/main/MainTemplate';
import LoginPage from './LoginPage';
import { Switch, Route } from 'react-router-dom';
import SingupPage from './SingupPage';

const BasePageBlock = styled.div`
  padding-top: 4em;
`;

function BasePage() {
  return (
    <BasePageBlock>
        <HeaderTemplate/>
        <Switch>
          <Route path="/" component={MainTemplate} exact />
          <Route path="/board" component={MainTemplate} />
          <Route path="/login" component={LoginPage}/>
          <Route path="/signup" component={SingupPage}/>
        </Switch>
        <div>footer</div>
    </BasePageBlock>
  );
}

export default BasePage;