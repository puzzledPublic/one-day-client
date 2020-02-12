import React, { useEffect } from "react";
import styled from "styled-components";
import AuthTemplate from "../../components/auth/AuthTemplate";
import LoginContainer from "../../containers/auth/LoginContainer";
import { useAuthenticated } from "../../lib/hook/useAuthenticated";
import { useHistory } from "react-router-dom";

const LoginPageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6rem);
`;

function LoginPage() {
  const [isLogined] = useAuthenticated();
  const history = useHistory();
  
  useEffect(() => {
    if(isLogined) {
      history.replace('/');
    }
  }, [isLogined, history]);
  
  return (
    <LoginPageBlock>
      <AuthTemplate>
        <LoginContainer />
      </AuthTemplate>
    </LoginPageBlock>
  );
}

export default LoginPage;
