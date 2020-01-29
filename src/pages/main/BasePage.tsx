import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import AuthRoute from "../../components/auth/AuthRoute";
import HeaderTemplate from "../../components/header/HeaderTemplate";
import MainTemplate from "../../components/main/MainTemplate";
import { useAuthenticated } from "../../lib/hook/useAuthenticated";
import LoginPage from "./LoginPage";
import SingupPage from "./SingupPage";

const BasePageBlock = styled.div`
  padding-top: 6rem;
`;

function BasePage() {
  const [isLogined] = useAuthenticated();
  return (
    <BasePageBlock>
      <HeaderTemplate />
      <Switch>
        <Route path="/" component={MainTemplate} exact />
        <AuthRoute path="/board" component={MainTemplate} />
        {!isLogined && (
          <>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SingupPage} />
          </>
        )}
      </Switch>
    </BasePageBlock>
  );
}

export default BasePage;
