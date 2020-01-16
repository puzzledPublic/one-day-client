import React from 'react';
import styled from 'styled-components';
import LoginTemplate from '../../components/auth/LoginTemplate';
import SignupContents from '../../components/auth/SignupContents';
import SignupContainer from '../../containers/signup/SignupContainer';

const SingupPageBlock = styled.div`
    display: flex;
    justify-content: center;
`;

function SingupPage() {
  return (
      <SingupPageBlock>
          <LoginTemplate>
              <SignupContainer/>
          </LoginTemplate>
      </SingupPageBlock>
  );
}

export default SingupPage;