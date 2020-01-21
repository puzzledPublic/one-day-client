import React from 'react';
import styled from 'styled-components';
import AuthTemplate from '../../components/auth/AuthTemplate';
import SignupContainer from '../../containers/auth/SignupContainer';

const SingupPageBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 6rem);
`;

function SingupPage() {
  return (
      <SingupPageBlock>
          <AuthTemplate>
              <SignupContainer/>
          </AuthTemplate>
      </SingupPageBlock>
  );
}

export default SingupPage;