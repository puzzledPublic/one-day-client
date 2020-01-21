import React from "react";
import styled from "styled-components";
import Input from "../common/Input";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const LoginHeaderBlock = styled.div`
  h1 {
    font-size: 4rem;
    padding: 0.5rem 0;
    text-transform: uppercase;
  }
`;

const LoginContentsBlock = styled.div`
  margin: 2rem 0;
  form {
    padding: 0 2rem;
  }

`;

const LoginFooterBlock = styled.div`
    & > div {
        display: flex;
        justify-content: space-between;
        padding: 0 2rem;
    }
`;

const InputWrapperBlock = styled.div``;

function LoginForm() {
  return (
    <>
      <LoginHeaderBlock>
          <h1>로그인</h1>
      </LoginHeaderBlock>
      <LoginContentsBlock>
        <form>
          <InputWrapperBlock>
            <Input
              type="text"
              placeholder="아이디"
              name="username"
              value=""
              required
            />
          </InputWrapperBlock>
          <InputWrapperBlock>
            <Input
              type="password"
              placeholder="비밀번호"
              name="password"
              value=""
              required
            ></Input>
          </InputWrapperBlock>
          <div className="button-wrapper">
            <Button color="primary">로그인</Button>
          </div>
        </form>
      </LoginContentsBlock>
      <LoginFooterBlock>
          <div>
            <Button color="secondary">비밀번호를 잊으셨나요?</Button>
            <Button color="secondary"><Link to="/signup">회원 가입</Link></Button>
          </div>
      </LoginFooterBlock>
    </>
  );
}

export default LoginForm;
