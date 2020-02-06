import React from "react";
import { MdExitToApp, MdPages, MdPermIdentity } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthenticated } from "../../lib/hook/useAuthenticated";
import { deleteLoginUserInfo } from "../../modules/auth";
import Button from "../common/Button";
import DropDown from "../common/DropDown";

const HeaderMainBlock = styled.ul`
  border-left: 1px solid rgba(144, 144, 144, 0.3);
`;

const MainLinkBlock = styled.li`
  margin: 0 1.5rem;

  span {
    margin-right: 1rem;
  }
  img {
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    vertical-align: middle;
  }
`;

function HeaderMain() {
  const [isLogined, loginUser] = useAuthenticated();
  const dispatch = useDispatch();

  const onLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(deleteLoginUserInfo());
  };

  return (
    <HeaderMainBlock>
      <MainLinkBlock>
        {isLogined ? (
          <DropDown
            toggleButton={
              <>
                <span>{loginUser && loginUser.username}</span>
                <img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="profileImage" />
              </>
            }
          >
            <DropDown.Item>
              <MdPermIdentity />
              회원정보
            </DropDown.Item>
            <DropDown.Item>
              <MdPages/>
              설정
            </DropDown.Item>
            <DropDown.Divider />
            <DropDown.Item onClick={onLogout}>
              <MdExitToApp />
              로그아웃
            </DropDown.Item>
          </DropDown>
        ) : (
          <Button color="primary">
            <Link to="/login">로그인</Link>
          </Button>
        )}
      </MainLinkBlock>
    </HeaderMainBlock>
  );
}

export default HeaderMain;
