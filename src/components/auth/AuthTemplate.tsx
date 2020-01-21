import React from "react";
import styled from "styled-components";

import image from "../../static/image/photo-1579478656069-33343cfde8c8.jpg";

const AuthTemplateBlock = styled.div`
  width: 70%;
  margin-top: -10rem;
  padding: 1rem;
  border-radius: 1rem;

  text-align: center;
  background-color: white;
  display: flex;

  .left-wrapper {
    flex-basis: 50%;
  }

  .right-wrapper {
    flex-basis: 50%;
    margin-left: 1rem;
  }

  .left-wrapper .bg-img {
    background-image: url(${image});
    background-size: cover;
    width: 100%;
    height: 100%;
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
