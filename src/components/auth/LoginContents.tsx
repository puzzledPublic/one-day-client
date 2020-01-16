import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";

const LoginContentsBlock = styled.div`
  margin: 30px 0;
  form {
    padding: 0 20px;
  }
  .button-wrapper {
    text-align: end;
  }
`;

function LoginContents() {
  return (
    <LoginContentsBlock>
      <form>
        <div>
          <Input type="text" placeholder="아이디" required/>
        </div>
        <div>
          <Input type="password" placeholder="비밀번호" required />
        </div>
        <div className="button-wrapper">
          <Button color="primary">로그인</Button>
        </div>
      </form>
    </LoginContentsBlock>
  );
}

export default LoginContents;
