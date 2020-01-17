import {
  SignupParams,
  SignupError
} from "../../containers/signup/SignupContainer";
import {
  validateUsername,
  comparePassword,
  validatePassword,
  validateEmail,
  initialInputError
} from "./InputValidator";

export function validateSignupParams(signupParams: SignupParams) {
  const { username, password, rePassword, email } = signupParams;

  const signupError: SignupError = {
    username: validateUsername(username),
    password: validatePassword(password),
    rePassword: comparePassword(password, rePassword),
    email: validateEmail(email),
    request: initialInputError
  };

  const isAllValid = Object.keys(signupError).every((key) => signupError[key].hasError === false);

  return [isAllValid, signupError] as [typeof isAllValid, typeof signupError];
}
