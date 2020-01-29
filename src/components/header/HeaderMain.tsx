import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthenticated } from "../../lib/hook/useAuthenticated";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { deleteLoginUserInfo } from "../../modules/auth";

const HeaderMainBlock = styled.ul`
  border-left: 1px solid rgba(144, 144, 144, 0.3);
`;

const MainLinkBlock = styled.li`
  margin: 0 1em;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

function HeaderMain() {
  const [isLogined] = useAuthenticated();
  const dispatch = useDispatch();
  
  const onLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(deleteLoginUserInfo());
  };
  
  return (
    <HeaderMainBlock>
      <MainLinkBlock>
        {isLogined ? (
          <Button color="warning" onClick={onLogout}>로그아웃</Button>
        ) : (
          <Button color="primary"><Link to="/login">로그인</Link></Button>
        )}
      </MainLinkBlock>
    </HeaderMainBlock>
  );
}

export default HeaderMain;
