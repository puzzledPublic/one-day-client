import React from 'react';
import styled from 'styled-components';

const CheckBoxBlock = styled.div`
    margin-bottom: 2rem;
    input[type=checkbox] {
        display: none;
    }

    label {
        position: relative;
    }

    label::before {
        content: ' ';
        position: absolute;
        top: 5px;
        width: 1rem;
        height: 1rem;
        border: 1px solid grey;
    }
    
    label::after {
        content: '\\2714';
        display: none;
        position: absolute;
        left: 0;
        width: 1rem;
        height: 1rem;
    }
    
    input[type=checkbox]:checked + label::after {
        display: initial;
    }

    label > span {
        padding-left: 1.5rem;
        font-size: 1.2rem;
    }
`;

function CheckBox({id, children, ...rest}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
      <CheckBoxBlock>
          <input type="checkbox" id={id} {...rest}/>
          <label htmlFor={id}><span>{children}</span></label>
      </CheckBoxBlock>
  );
}

export default CheckBox;