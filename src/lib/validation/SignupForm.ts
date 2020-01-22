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
  validateCheck,
  isAllValid
} from "./InputValidator";

export function validateSignupParams(signupParams: SignupParams): [boolean, SignupError] {
  const { username, password, rePassword, email, termAgreement } = signupParams;

  const signupError: SignupError = {
    username: validateUsername(username),
    password: validatePassword(password),
    rePassword: comparePassword(password, rePassword),
    email: validateEmail(email),
    termAgreement: validateCheck(termAgreement, "약관에 동의 해 주세요."),
    request: initialInputError
  };

  return [isAllValid(signupError), signupError];
}
