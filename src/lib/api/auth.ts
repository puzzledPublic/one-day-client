import axios from "axios";
import { SignupParams } from "../../containers/signup/SignupContainer";

export const requestSignup = async (signupParams: SignupParams) => {
    const response =  await axios.put("/signup", signupParams);
    return response;
};
