import React from "react";
import styled from "styled-components";
import HeaderLinkList from "./HeaderLinkList";
import HeaderMain from "./HeaderMain";

const HeaderNavLeft = styled.nav`
  border-left: solid 1px rgba(160, 160, 160, 0.3);
  padding-left: 10px;
`;

const HeaderNavRight = styled.nav`
  margin-left: auto;
`;

function HeaderNav() {
  return (
    <>
      <HeaderNavLeft>
          <HeaderLinkList/>
      </HeaderNavLeft>
      <HeaderNavRight>
          <HeaderMain/>
      </HeaderNavRight>
    </>
  );
}

export default HeaderNav;
