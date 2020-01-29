const SAVE_LOGIN_USER_INFO = "auth/SAVE_LOGIN_USER_INFO" as const;
const DELETE_LOGIN_USER_INFO = "auth/DELETE_LOGIN_USER_INFO" as const;

interface AuthAction {
  type: typeof SAVE_LOGIN_USER_INFO | typeof DELETE_LOGIN_USER_INFO;
  payload: AuthState;
}

export function saveLoginUserInfo(loginUser: LoginUser): AuthAction {
  return {
    type: SAVE_LOGIN_USER_INFO,
    payload: { isLogined: true, loginUser }
  };
}

export function deleteLoginUserInfo(): AuthAction {
  return {
    type: DELETE_LOGIN_USER_INFO,
    payload: { isLogined: false, loginUser: null }
  };
}

export interface LoginUser {
  id: number;
  username: string;
  nickname: string;
  role: "string";
  exp: number;
  iat: number;
}

export interface AuthState {
  isLogined: boolean;
  loginUser: LoginUser | null;
}

const initialState: AuthState = {
  isLogined: false,
  loginUser: null
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case SAVE_LOGIN_USER_INFO:
      return action.payload;
    case DELETE_LOGIN_USER_INFO:
      return {isLogined: false, loginUser: null};
    default:
      return state;
  }
}
