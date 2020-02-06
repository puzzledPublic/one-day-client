import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderLogoBlock = styled.h1`
    font-weight: bold;
    margin: 0 1.5em;
    text-transform:uppercase;
    letter-spacing: 0.25em;
    white-space: nowrap;
`;

function HeaderLogo() {
  return (
      <HeaderLogoBlock>
          <Link to="/">Future Imperfect</Link>
      </HeaderLogoBlock>
  );
}

export default HeaderLogo;