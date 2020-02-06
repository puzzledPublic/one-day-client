import axios from "axios";
import { SignupParams } from "../../containers/auth/SignupContainer";
import { LoginParams } from "../../containers/auth/LoginContainer";

import {baseURL} from './index';

const requestLogin = async (loginParams: LoginParams) => {
    const response = await axios.post(`${baseURL}/auth/signin`, loginParams);
    return response;
}

const requestSignup = async (signupParams: SignupParams) => {
    const response =  await axios.post(`${baseURL}/member`, signupParams);
    return response;
};


export default {
    requestLogin,
    requestSignup
}