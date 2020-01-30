import React from "react";
import styled from "styled-components";

import image from "../../static/image/undraw_fill_in_mie5.svg";

const AuthTemplateBlock = styled.div`
  width: 70%;
  margin-top: -10rem;
  padding: 1rem;
  border-radius: 1rem;

  text-align: center;
  background-color: white;
  display: flex;
  box-shadow: 0.7rem 0.7rem 0.5rem rgba(0, 0, 0, 0.2);
  .left-wrapper {
    flex-basis: 50%;
  }

  .right-wrapper {
    flex-basis: 50%;
    margin-left: 1rem;
  }

  .left-wrapper .bg-img {
    background-image: url(${image});
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
  }
`;

function AuthTemplate({ children }: React.PropsWithChildren<{}>) {
  return (
    <AuthTemplateBlock>
      <div className="left-wrapper">
        <div className="bg-img"></div>
      </div>
      <div className="right-wrapper">{children}</div>
    </AuthTemplateBlock>
  );
}

export default AuthTemplate;
