import React from "react";
import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const HeaderTemplateBlock = styled.header`
  display: flex;
  top: 0;
  left: 0;
  height: 4em;
  width: 100%;
  line-height: 4em;
  position: fixed;
  border-bottom: solid 1px rgba(160, 160, 160, 0.3);
  background-color: white;
`;

function HeaderTemplate() {
  return (
    <HeaderTemplateBlock>
      <HeaderLogo />
      <HeaderNav />
    </HeaderTemplateBlock>
  );
}

export default HeaderTemplate;
