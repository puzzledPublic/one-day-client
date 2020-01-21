import React from "react";
import styled from "styled-components";
import AuthTemplate from "../../components/auth/AuthTemplate";
import LoginContainer from "../../containers/auth/LoginContainer";

const LoginPageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6rem);
`;

function LoginPage() {
  return (
    <LoginPageBlock>
      <AuthTemplate>
        <LoginContainer />
      </AuthTemplate>
    </LoginPageBlock>
  );
}

export default LoginPage;
