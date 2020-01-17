import React from "react";
import styled, { css } from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";
import {
  SignupParams,
  SignupError
} from "../../containers/signup/SignupContainer";
import { InputError } from "../../lib/validation/InputValidator";

const SignupHeaderBlock = styled.div`
  h1 {
    font-size: 40px;
    font-weight: bold;
    padding: 5px 0;
    text-transform: uppercase;
  }
`;

const SignupContentsBlock = styled.div`
  margin: 30px 0;
  form {
    padding: 0 20px;
  }
`;

const SignupFooterBlock = styled.div``;

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
            bottom: 10%;
            right: 0;
            font-size: 12px;
        }
    `}
`;

interface SignupProps {
  signupParams: SignupParams;
  signupError: SignupError;
  loading: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (signupParams: SignupParams) => void;
}

function SignupContents({
  signupParams,
  signupError,
  loading,
  onChange,
  onSubmit
}: SignupProps) {
  const { username, password, rePassword, email } = signupParams;
  return (
    <>
      <SignupHeaderBlock>
        <h1>회원 가입</h1>
      </SignupHeaderBlock>
      <SignupContentsBlock>
        <form>
          <InputWrapperBlock inputError={signupError.username}>
            <Input
              type="text"
              placeholder="아이디"
              required
              name="username"
              onChange={onChange}
              value={username}
            />
          </InputWrapperBlock>
          <InputWrapperBlock inputError={signupError.password}>
            <Input
              type="password"
              placeholder="비밀번호"
              required
              name="password"
              onChange={onChange}
              value={password}
            />
          </InputWrapperBlock>
          <InputWrapperBlock inputError={signupError.rePassword}>
            <Input
              type="password"
              placeholder="비밀번호 확인"
              required
              name="rePassword"
              onChange={onChange}
              value={rePassword}
            />
          </InputWrapperBlock>
          <InputWrapperBlock inputError={signupError.email}>
            <Input
              type="text"
              placeholder="이메일"
              required
              name="email"
              onChange={onChange}
              value={email}
            />
          </InputWrapperBlock>
          <div>
            {loading ? (
              <Button color="secondary">로딩중</Button>
            ) : (
              <Button
                color="primary"
                onClick={event => {
                  event.preventDefault();
                  onSubmit(signupParams);
                }}
              >
                회원 가입
              </Button>
            )}
            {signupError.request && signupError.request.hasError && (
              <div>{signupError.request.errorMessage}</div>
            )}
          </div>
        </form>
      </SignupContentsBlock>
      <SignupFooterBlock></SignupFooterBlock>
    </>
  );
}

export default SignupContents;
