import React from "react";
import styled from "styled-components";
import LoginHeader from "./LoginHeader";
import LoginContents from "./LoginContents";
import LoginFooter from "./LoginFooter";

const LoginTemplateBlock = styled.div`
    width: 400px;
    margin-top: 100px;
    text-align: center;
    background-color: white;
    padding: 30px 20px;
`;

function LoginTemplate({children}: React.PropsWithChildren<{}>) {
  return (
    <LoginTemplateBlock>
        {children}
    </LoginTemplateBlock>
  );
}

export default LoginTemplate;
