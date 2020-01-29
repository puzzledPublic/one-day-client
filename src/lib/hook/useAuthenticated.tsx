import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import { AuthState, LoginUser } from "../../modules/auth";

export function useAuthenticated(): [boolean, LoginUser | null] {
  const { isLogined, loginUser } = useSelector<RootState, AuthState>(
    state => state.authReducer
  );
  return [isLogined, loginUser];
}
