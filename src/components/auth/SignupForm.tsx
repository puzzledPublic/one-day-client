import React from "react";
import styled, { css } from "styled-components";
import {
  SignupError,
  SignupParams
} from "../../containers/auth/SignupContainer";
import { InputError } from "../../lib/validation/InputValidator";
import Button from "../common/Button";
import CheckBox from "../common/CheckBox";
import Input from "../common/Input";
import { Link } from "react-router-dom";

const SignupHeaderBlock = styled.div`
  h1 {
    font-size: 4rem;
    padding: 5px 0;
    text-transform: uppercase;
  }
`;

const SignupContentsBlock = styled.div`
  margin: 3rem 0;
  form {
    padding: 0 2rem;
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
            left: 1.5rem;
            font-size: 12px;
        }
    `}
`;

interface SignupFormProps {
  signupParams: SignupParams;
  signupError: SignupError;
  loading: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (signupParams: SignupParams) => void;
}

function SignupForm({
  signupParams,
  signupError,
  loading,
  onChange,
  onSubmit
}: SignupFormProps) {
  const { username, password, rePassword, email, termAgreement } = signupParams;
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
          <CheckBox
            id="term-agree"
            name="termAgreement"
            onChange={onChange}
            checked={termAgreement}
          >
            <Link to="/login">이용약관</Link> 및 <Link to="/login">개인정보처리방침</Link> 에 동의합니다.
          </CheckBox>
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

export default SignupForm;
