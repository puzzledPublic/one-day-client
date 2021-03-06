import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { LoginUser, saveLoginUserInfo } from "../../modules/auth";

export function useInitAuth() {
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem("accessToken");

    if(!accessToken) return;

    const contents = jwt_decode<LoginUser>(accessToken);
    const expireDate = new Date(contents.exp * 1000);
    const currentDate = new Date();

    if(currentDate.getTime() > expireDate.getTime()) return;
    dispatch(saveLoginUserInfo(contents));
}