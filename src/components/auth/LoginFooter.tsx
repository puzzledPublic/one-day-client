import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const LoginFooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

function LoginFooter() {
  return (
    <LoginFooterBlock>
      <Button color="secondary">비밀번호를 잊으셨나요?</Button>
      <Button color="secondary">
        <Link to="/signup">회원 가입</Link>
      </Button>
    </LoginFooterBlock>
  );
}

export default LoginFooter;
