import React from "react";
import styled, { css } from "styled-components";
import Input from "../common/Input";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import { LoginParams, LoginError } from "../../containers/auth/LoginContainer";
import { InputError } from "../../lib/validation/InputValidator";

const LoginHeaderBlock = styled.div`
  h1 {
    font-size: 3rem;
    padding: 0.5rem 0;
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

const InputWrapperBlock = styled.div<{ inputError?: InputError }>`
  position: relative;
  ${props =>
    props.inputError &&
    props.inputError.hasError &&
    css`
    ::after {
      content: '${props.inputError.errorMessage}';
      position: absolute;
      color: orangered;
      bottom: 5%;
      left: 1.5rem;
      font-size: 1.2rem;
    }
  `}
`;

interface LoginFormProps {
  loginParams: LoginParams;
  loginError: LoginError;
  loading: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (loginParams: LoginParams) => void;
}

function LoginForm({
  loginParams,
  onChange,
  onSubmit,
  loginError,
  loading
}: LoginFormProps) {
  const { username, password } = loginParams;
  return (
    <>
      <LoginHeaderBlock>
        <h1>로그인</h1>
      </LoginHeaderBlock>
      <LoginContentsBlock>
        <form>
          <InputWrapperBlock inputError={loginError.username}>
            <Input
              type="text"
              placeholder="아이디"
              name="username"
              value={username}
              onChange={onChange}
              required
            />
          </InputWrapperBlock>
          <InputWrapperBlock inputError={loginError.password}>
            <Input
              type="password"
              placeholder="비밀번호"
              name="password"
              value={password}
              required
              onChange={onChange}
            ></Input>
          </InputWrapperBlock>
          <div className="button-wrapper">
            {loading ? (
              <Button color="secondary">요청중</Button>
            ) : (
              <Button
                color="primary"
                onClick={event => {
                  event.preventDefault();
                  onSubmit(loginParams);
                }}
              >
                로그인
              </Button>
            )}
          </div>
        </form>
      </LoginContentsBlock>
      <LoginFooterBlock>
        <div>
          <Button color="secondary">비밀번호를 잊으셨나요?</Button>
          <Button color="secondary">
            <Link to="/signup">회원 가입</Link>
          </Button>
        </div>
      </LoginFooterBlock>
    </>
  );
}

export default LoginForm;
