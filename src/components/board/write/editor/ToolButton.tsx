import React from "react";
import styled, { css } from "styled-components";

const ToolButtonBlock = styled.span<{ active: boolean }>`
  margin: 0 1rem;
  box-sizing: border-box;
  display: inline-flex;
  justify-content:center;
  align-items:center;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  &:hover {
      border: 1px solid #ccc;
  }
  ${props =>
    props.active &&
    css`
      border: 1px solid #ccc;
      color: #6C63FF;
    `}
`;

function ToolButton({
  onToggle,
  label,
  style,
  active,
  icon
}: {
  onToggle: (type: string) => void;
  label: string;
  style: string;
  active: boolean;
  icon: JSX.Element | null;
}) {
  const onMouseDown = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    onToggle(style);
  };
  return (
    <ToolButtonBlock active={active} onMouseDown={onMouseDown}>
      {icon ? icon : label}
    </ToolButtonBlock>
  );
}

export default ToolButton;
