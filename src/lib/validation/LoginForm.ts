import { LoginParams, LoginError } from "../../containers/auth/LoginContainer";
import { validateUsername, validatePassword, initialInputError, isAllValid } from "./InputValidator";

export function validateLoginParams(loginParams: LoginParams): [boolean, LoginError] {
    const {username, password} = loginParams;

    const loginError: LoginError = {
        username: validateUsername(username),
        password: validatePassword(password),
        request: initialInputError,
    }

    return [isAllValid(loginError), loginError];
}