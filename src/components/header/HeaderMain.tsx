import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderMainBlock = styled.ul`
    border-left: 1px solid rgba(144, 144, 144, 0.3);
`;

const MainLinkBlock = styled.li`
    margin: 0 1em;
    letter-spacing: 0.2em;
    text-transform: uppercase;
`;

function HeaderMain() {
  return (
    <HeaderMainBlock>
        <MainLinkBlock>
            <Link to="/login">로그인</Link>
        </MainLinkBlock>
    </HeaderMainBlock>
  );
}

export default HeaderMain;