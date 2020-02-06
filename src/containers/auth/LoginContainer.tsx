import React, { useState } from "react";
import LoginForm from "../../components/auth/LoginForm";
import {
  InputError,
  initialInputError
} from "../../lib/validation/InputValidator";
import useInputs from "../../lib/hook/useInputs";
import useRequest from "../../lib/hook/useRequest";
import Api from "../../lib/api";
import { AxiosResponse } from "axios";
import { ErrorResponse, RequestError } from "../../lib/types";
import { validateLoginParams } from "../../lib/validation/LoginForm";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { saveLoginUserInfo, LoginUser } from "../../modules/auth";
import { useLocation, useHistory } from "react-router-dom";

export interface LoginParams {
  username: string;
  password: string;
}
const initialLoginParams: LoginParams = {
  username: "",
  password: ""
};

export interface LoginError extends RequestError {
  [key: string]: InputError;
  username: InputError;
  password: InputError;
}

const initialLoginError: LoginError = {
  username: initialInputError,
  password: initialInputError,
  request: initialInputError
};

function LoginContainer() {
  const [inputs, setInputs] = useInputs(initialLoginParams);
  const [loginError, setLoginError] = useState<LoginError>(initialLoginError);
  const [requestToLogin, loading] = useRequest<
    { accessToken: string } | ErrorResponse
  >(Api.auth.requestLogin);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const onSubmit = async (loginParams: LoginParams) => {
    const [isAllValid, loginError] = validateLoginParams(loginParams);
    if (!isAllValid) {
      setLoginError(loginError);
      return;
    }

    try {
      const res = await requestToLogin(loginParams);
      const { accessToken } = res.data as { accessToken: string };

      //accessToken값을 localStorage에 저장.
      localStorage.setItem("accessToken", accessToken);
      //redux에 유저 정보 저장.
      const userInfo = jwt_decode<LoginUser>(accessToken);

      dispatch(saveLoginUserInfo(userInfo));
      history.replace(from);
    } catch (error) {
      console.log(error);
      const newLoginError = getLoginRequestError(loginError, error.response);
      setLoginError(newLoginError);
    }
  };

  return (
    <LoginForm
      loginParams={inputs}
      onChange={setInputs}
      onSubmit={onSubmit}
      loginError={loginError}
      loading={loading}
    />
  );
}

function getLoginRequestError(
  loginError: LoginError,
  response: AxiosResponse<ErrorResponse>
): LoginError {
  if (response) {
    switch (response.status) {
      case 400:
      case 404:
        return getBadRequestError(loginError, response.data);
      default:
        return {
          ...loginError,
          request: { hasError: true, errorMessage: "요청 실패." }
        };
    }
  }
  return {
    ...loginError,
    request: { hasError: true, errorMessage: "네트워크 오류." }
  };
}

function getBadRequestError(
  loginError: LoginError,
  response: ErrorResponse
): LoginError {
  switch (response.code) {
    case "M003":
      return {
        ...loginError,
        password: {
          hasError: true,
          errorMessage: "비밀번호가 일치하지 않습니다."
        }
      };
    case "G002":
      return {
        ...loginError,
        username: { hasError: true, errorMessage: "아이디를 확인 해 주세요." }
      };
    default:
      return loginError;
  }
}

export default LoginContainer;
