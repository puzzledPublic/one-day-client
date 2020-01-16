import React from 'react';
import styled from 'styled-components';

const InputBlock = styled.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ddd;
    background-color: inherit;
    margin-bottom: 30px;
    transition: all 0.3s;
    :focus {
        box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
    }
`;

function Input({...rest}: React.PropsWithChildren<React.InputHTMLAttributes<HTMLInputElement>>) {
  return (
      <InputBlock {...rest} />
  );
}

export default Input;