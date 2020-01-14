import React from "react";
import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

const HeaderLinkBlock = styled.li`
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

const StyledLink = styled(Link)`
  padding: 0 1rem;
  border-left: 1px solid rgba(144, 144 ,144, 0.3);
  :first-child {
    border-left: none;
  }
  :last-child {
    border-right: 1px solid rgba(144, 144, 144, 0.3);
  }
`;

function HeaderLink({to, children}: LinkProps & {children: string}) {
  return (
    <HeaderLinkBlock>
      <StyledLink to={to}>{children}</StyledLink>
    </HeaderLinkBlock>
  );
}

export default HeaderLink;
