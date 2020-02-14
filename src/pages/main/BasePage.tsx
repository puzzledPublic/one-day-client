import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import AuthRoute from "../../components/auth/AuthRoute";
import HeaderTemplate from "../../components/header/HeaderTemplate";
import MainTemplate from "../../components/main/MainTemplate";
import LoginPage from "./LoginPage";
import SingupPage from "./SingupPage";
import WritePage from './WritePage';

const BasePageBlock = styled.div`
  padding-top: 6rem;
`;

function BasePage() {
  return (
    <BasePageBlock>
      <HeaderTemplate />
      <Switch>
        <Route path="/" component={MainTemplate} exact />
        <AuthRoute path="/board" component={MainTemplate} />
        <Route path="/article" component={MainTemplate}/>
        <Route path="/write" component={WritePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SingupPage} />
        <Route render={props => <div>404</div>} />
      </Switch>
    </BasePageBlock>
  );
}

export default BasePage;
