import React from "react";
import styled from "styled-components";
import HeaderTemplate from "../../components/header/HeaderTemplate";
import MainTemplate from "../../components/main/MainTemplate";
import LoginPage from "./LoginPage";
import { Switch, Route } from "react-router-dom";
import SingupPage from "./SingupPage";
import AuthRoute from "../../components/auth/AuthRoute";
import { useAuthenticated } from "../../lib/hook/useAuthenticated";
import Modal from "../../components/common/Modal";

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
        <Route path="/modal" component={Modal}/>
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
