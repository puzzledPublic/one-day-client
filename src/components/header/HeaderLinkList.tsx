import React from 'react';
import styled from 'styled-components';
import HeaderLink from './HeaderLink';

const HeaderLinkListBlock = styled.ul`
  display:flex;
`;

function HeaderLinkList() {
  return (
    <HeaderLinkListBlock>
      <HeaderLink to="/board/free">Board</HeaderLink>
      <HeaderLink to="/lorem">Tesus</HeaderLink>
      <HeaderLink to="/lorem">Feugiat</HeaderLink>
      <HeaderLink to="/lorem">Tempus</HeaderLink>
      <HeaderLink to="/lorem">Adipiscing</HeaderLink>
    </HeaderLinkListBlock>
  );
}

export default HeaderLinkList;