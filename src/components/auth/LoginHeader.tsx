import React from "react";
import styled from "styled-components";

const LoginHeaderBlock = styled.div`
  h1 {
    font-size: 40px;
    font-weight: bold;
    padding: 5px 0;
    text-transform: uppercase;
  }
`;

function LoginHeader() {
  return (
    <LoginHeaderBlock>
      <h1>로그인</h1>
    </LoginHeaderBlock>
  );
}

export default LoginHeader;
