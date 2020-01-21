import {
  SignupParams,
  SignupError
} from "../../containers/auth/SignupContainer";
import {
  validateUsername,
  comparePassword,
  validatePassword,
  validateEmail,
  initialInputError,
  validateCheck
} from "./InputValidator";

export function validateSignupParams(signupParams: SignupParams) {
  const { username, password, rePassword, email, termAgreement } = signupParams;

  const signupError: SignupError = {
    username: validateUsername(username),
    password: validatePassword(password),
    rePassword: comparePassword(password, rePassword),
    email: validateEmail(email),
    termAgreement: validateCheck(termAgreement, "약관에 동의 해 주세요."),
    request: initialInputError
  };

  const isAllValid = Object.keys(signupError).every((key) => signupError[key].hasError === false);

  return [isAllValid, signupError] as [typeof isAllValid, typeof signupError];
}
