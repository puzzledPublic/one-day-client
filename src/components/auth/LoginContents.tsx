import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const LoginContentsBlock = styled.div`
  margin: 30px 0;
  form {
    padding: 0 20px;
  }
  input {
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ddd;
    background-color: inherit;
    margin-bottom: 30px;
    transition: all 0.3s;
    :focus {
      box-shadow: 0 3px #ddd;
    }
  }
  .button-wrapper {
    text-align: end;
  }
`;

function LoginContents() {
  return (
    <LoginContentsBlock>
      <form>
        <div>
          <input type="text" placeholder="아이디" />
        </div>
        <div>
          <input type="password" placeholder="비밀번호" />
        </div>
        <div className="button-wrapper">
          <Button
            color="primary"
            onClick={e => {
              e.preventDefault();
              console.log("clicked");
            }}
          >
            로그인
          </Button>
        </div>
      </form>
    </LoginContentsBlock>
  );
}

export default LoginContents;
