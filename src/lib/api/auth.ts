import axios from "axios";
import { SignupParams } from "../../containers/signup/SignupContainer";

const baseURL = 'http://localhost:8080';

export const requestSignup = async (signupParams: SignupParams) => {
    const response =  await axios.post(`${baseURL}/member`, signupParams);
    return response;
};
