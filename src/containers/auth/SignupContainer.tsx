import React, { useState } from "react";
import useInputs from "../../lib/hook/useInputs";
import SignupForm from "../../components/auth/SignupForm";
import { requestSignup } from "../../lib/api/auth";
import useRequest from "../../lib/hook/useRequest";
import { validateSignupParams } from "../../lib/validation/SignupForm";
import {
  InputError,
  initialInputError
} from "../../lib/validation/InputValidator";
import { AxiosResponse } from "axios";
import { ErrorResponse, RequestError } from "../../lib/types";
import { useHistory } from "react-router-dom";

export interface SignupParams {
  username: string;
  password: string;
  rePassword: string;
  email: string;
  termAgreement: boolean;
}

const initialSignupParams: SignupParams = {
  username: "",
  password: "",
  rePassword: "",
  email: "",
  termAgreement: false
};

export interface SignupError extends RequestError {
  [key: string]: InputError;
  username: InputError;
  password: InputError;
  rePassword: InputError;
  email: InputError;
  termAgreement: InputError;
}

const initialSignupError: SignupError = {
  username: initialInputError,
  password: initialInputError,
  rePassword: initialInputError,
  email: initialInputError,
  termAgreement: initialInputError,
  request: initialInputError
};

function SignupContainer() {
  const [inputs, setInputs] = useInputs(initialSignupParams);
  
  const [signupError, setSignupError] = useState<SignupError>(
    initialSignupError
  );

  const [request, loading] = useRequest(requestSignup);
  const history = useHistory();

  const onSubmit = async (signupParams: SignupParams) => {
    const [isAllValid, signupError] = validateSignupParams(signupParams);
    if (!isAllValid) {
      setSignupError(signupError);
      return;
    }

    try {
      await request(signupParams);
      //TODO: 회원 가입 완료 표시 후 (메인페이지 or 로그인 페이지)로 이동 기능 추가
      history.replace("/");
      
    } catch (error) {
      const newSignupError = getSignupRequestError(signupError, error.response);
      setSignupError(newSignupError);
    }
  };

  return (
    <SignupForm
      signupParams={inputs}
      onChange={setInputs}
      onSubmit={onSubmit}
      signupError={signupError}
      loading={loading}
    />
  );
}

function getSignupRequestError(
  signupError: SignupError,
  response: AxiosResponse<ErrorResponse>
): SignupError {
  if (response) {
    switch (response.status) {
      case 400:
        return getBadRequestError(signupError, response.data);
      default:
        return {
          ...signupError,
          request: { hasError: true, errorMessage: "요청 실패." }
        };
    }
  }
  return {
    ...signupError,
    request: { hasError: true, errorMessage: "네트워크 오류." }
  };
}

function getBadRequestError(signupError: SignupError, response: ErrorResponse) {
  switch (response.code) {
    case "M001":
      return {
        ...signupError,
        username: {
          hasError: true,
          errorMessage: "중복 아이디 입니다."
        }
      };
    case "M002":
      return {
        ...signupError,
        email: { hasError: true, errorMessage: "중복 이메일 입니다." }
      };
    case "M003":
      return {
        ...signupError,
        password: {
          hasError: true,
          errorMessage: "비밀번호가 일치하지 않습니다."
        }
      };
    default:
      return signupError;
  }
}

export default SignupContainer;
