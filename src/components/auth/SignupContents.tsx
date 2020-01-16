import React from "react";
import styled, { css } from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";
import {
  SignupParams,
  SignupError
} from "../../containers/signup/SignupContainer";

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

const InputWrapperBlock = styled.div<{ errorMessage?: string | null }>`
  position: relative;
  ${props =>
    props.errorMessage &&
    css`       
        ::after {
            content: '${props.errorMessage}';
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
  validationError: SignupError;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (signupParams: SignupParams) => void;
}

function SignupContents({
  signupParams,
  onChange,
  onSubmit,
  validationError
}: SignupProps) {
  const { username, password, passwordCheck, email } = signupParams;
  return (
    <>
      <SignupHeaderBlock>
        <h1>회원 가입</h1>
      </SignupHeaderBlock>
      <SignupContentsBlock>
        <form>
          <InputWrapperBlock errorMessage={validationError.username}>
            <Input
              type="text"
              placeholder="아이디"
              required
              name="username"
              onChange={onChange}
              value={username}
            />
          </InputWrapperBlock>
          <InputWrapperBlock errorMessage={validationError.password}>
            <Input
              type="password"
              placeholder="비밀번호"
              required
              name="password"
              onChange={onChange}
              value={password}
            />
           </InputWrapperBlock>
           <InputWrapperBlock >
            <Input
              type="password"
              placeholder="비밀번호 확인"
              required
              name="passwordCheck"
              onChange={onChange}
              value={passwordCheck}
            />
          </InputWrapperBlock>
          <InputWrapperBlock errorMessage={validationError.email}>
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
            <Button
              color="primary"
              onClick={event => {
                event.preventDefault();
                onSubmit(signupParams);
              }}
            >
              회원 가입
            </Button>
          </div>
        </form>
      </SignupContentsBlock>
      <SignupFooterBlock></SignupFooterBlock>
    </>
  );
}

export default SignupContents;
