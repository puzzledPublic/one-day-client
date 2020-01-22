import axios from "axios";
import { SignupParams } from "../../containers/auth/SignupContainer";
import { LoginParams } from "../../containers/auth/LoginContainer";

const baseURL = 'http://localhost:8080';

export const requestLogin = async (loginParams: LoginParams) => {
    const response = await axios.post(`${baseURL}/auth/signin`, loginParams);
    return response;
}

export const requestSignup = async (signupParams: SignupParams) => {
    const response =  await axios.post(`${baseURL}/member`, signupParams);
    return response;
};
