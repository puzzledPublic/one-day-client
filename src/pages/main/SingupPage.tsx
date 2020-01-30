import React from "react";
import styled from "styled-components";
import AuthTemplate from "../../components/auth/AuthTemplate";
import SignupContainer from "../../containers/auth/SignupContainer";
import { useAuthenticated } from "../../lib/hook/useAuthenticated";
import { useHistory } from "react-router-dom";

const SingupPageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6rem);
`;

function SingupPage() {
  const [isLogined] = useAuthenticated();
  const history = useHistory();
  if (isLogined) {
    history.replace("/");
  }
  return (
    <SingupPageBlock>
      <AuthTemplate>
        <SignupContainer />
      </AuthTemplate>
    </SingupPageBlock>
  );
}

export default SingupPage;
