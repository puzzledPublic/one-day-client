import React from "react";
import styled from "styled-components";

const InputBlock = styled.input`
  width: 100%;
  padding: 1.5rem;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 3rem;
  background-color: inherit;
  margin-bottom: 2rem;
  transition: border 0.3s;
  box-sizing: border-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #bac8f3;
    box-shadow: 0 0 0 0.2rem rgba(78, 115, 223, 0.25);
  }
`;

function Input({
  ...rest
}: React.PropsWithChildren<React.InputHTMLAttributes<HTMLInputElement>>) {
  return <InputBlock {...rest} />;
}

export default Input;
