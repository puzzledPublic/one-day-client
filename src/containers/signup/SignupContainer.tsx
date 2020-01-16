import React, { useState } from "react";
import useInputs from "../../lib/hook/useInputs";
import SignupContents from "../../components/auth/SignupContents";
import { requestSignup } from "../../lib/api/auth";

export interface SignupParams {
  username: string;
  password: string;
  passwordCheck: string;
  email: string;
}

export interface SignupError {
  [key: string]: string | null;
  username: string | null;
  password: string | null;
  email: string | null;
}

function SignupContainer() {
  const [state, onChange] = useInputs({
    username: "",
    password: "",
    passwordCheck: "",
    email: ""
  });

  const [validationError, setValidationError] = useState<SignupError>({
    username: null,
    password: null,
    email: null
  });

  const onSubmit = async (signupParams: SignupParams) => {
    const [isValid, signupError] = validateSignupParams(signupParams);
    if (!isValid) {
      setValidationError(signupError);
      return;
    }
    //TODO:: 회원가입 요청.
    try {
        const result = await requestSignup(signupParams);
    }catch(error) {
        console.log(error.response);
    }
  };

  return (
    <SignupContents
      signupParams={state}
      onChange={onChange}
      onSubmit={onSubmit}
      validationError={validationError}
    />
  );
}

function validateSignupParams(signupParams: SignupParams) {
  const { username, password, passwordCheck, email } = signupParams;
  const signupError: SignupError = {
    username: validateUsername(username),
    password: validatePassword(password, passwordCheck),
    email: validateEmail(email)
  };
  const isValid = Object.keys(signupError).every(
    key => signupError[key] === null
  );
  return [isValid, signupError] as [typeof isValid, typeof signupError];
}

function validateUsername(username: string) {
  if (username === "") {
    return "아이디를 입력해주세요.";
  }
  if (!/^[a-zA-Z][\w\d]{4,20}$/.test(username)) {
    return "아이디는 4 ~ 20자, 영어로 시작합니다.";
  }
  return null;
}

function validatePassword(password: string, passwordCheck: string) {
  if (password === "") {
    return "비밀번호를 입력해주세요";
  }
  if (!/[a-zA-Z0-9!@#$%^&*]{5,30}$/.test(password)) {
    return "비밀번호는 5 ~ 30자, 영어,숫자,특수문자를 포함할 수 있습니다.";
  }
  if (password !== passwordCheck) {
    return "비밀번호가 일치하지 않습니다.";
  }
  return null;
}

function validateEmail(email: string) {
  if (email === "") {
    return "이메일을 입력해주세요.";
  }
  if (
    !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
      email
    )
  ) {
    return "이메일 형식에 맞지 않습니다.";
  }
  return null;
}

export default SignupContainer;
