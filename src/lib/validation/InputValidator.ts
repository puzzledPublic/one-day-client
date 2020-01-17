export interface InputError {
  hasError: boolean;
  errorMessage: string;
}
export const initialInputError: InputError = {hasError: false, errorMessage: ""};

export function validateUsername(username: string): InputError {
  if (username === "") {
    return {hasError: true, errorMessage: "아이디를 입력해주세요."};
  }
  if (!/^[a-zA-Z][\w\d]{3,20}$/.test(username)) {
    return {hasError: true, errorMessage: "아이디는 4 ~ 20자, 영어로 시작합니다."};
  }
  return {hasError: false, errorMessage: ""};
}

export function validatePassword(password: string): InputError {
  if (password === "") {
    return {hasError: true, errorMessage: "비밀번호를 입력해주세요"};
  }
  if (!/[a-zA-Z0-9!@#$%^&*]{5,30}$/.test(password)) {
    return {hasError: true, errorMessage: "비밀번호는 5 ~ 30자, 영어,숫자,특수문자를 포함할 수 있습니다."};
  }
  return {hasError: false, errorMessage: ""};
}

export function comparePassword(password: string, rePassword: string): InputError {
  if (password !== rePassword) {
    return {hasError: true, errorMessage: "비밀번호가 일치하지 않습니다."};
  } else {
    return {hasError: false, errorMessage: ""};
  }
}

export function validateEmail(email: string): InputError {
  if (email === "") {
    return {hasError: true, errorMessage: "이메일을 입력해주세요."};
  }
  if (
    !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
      email
    )
  ) {
    return {hasError: true, errorMessage: "이메일 형식에 맞지 않습니다."};
  }
  return {hasError: false, errorMessage: ""};
}
