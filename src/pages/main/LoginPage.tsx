import React from "react";
import styled from "styled-components";
import LoginTemplate from "../../components/auth/LoginTemplate";
import LoginHeader from "../../components/auth/LoginHeader";
import LoginContents from "../../components/auth/LoginContents";
import LoginFooter from "../../components/auth/LoginFooter";

const LoginPageBlock = styled.div`
  display: flex;
  justify-content: center;
`;

function LoginPage() {
  return (
    <LoginPageBlock>
      <LoginTemplate>
        <LoginHeader />
        <LoginContents />
        <LoginFooter />
      </LoginTemplate>
    </LoginPageBlock>
  );
}

export default LoginPage;
