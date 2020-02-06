import React from "react";
import styled from "styled-components";

interface ColorPallete {
  [key: string]: {color: string, hover: string};
}

const pallete: ColorPallete = {
  light: {color: "#f8f9fa", hover: "#bdc3c7"},
  dark: {color: "#2c3e50", hover: "#34495e"},
  primary: {color: "#2980b9", hover: "#3498db"},
  secondary: {color: "#7f8c8d", hover: "#95a5a6"},
  warning: {color: "#f39c12", hover: "#f1c40f"}
};

const ButtonBlock = styled.button<{ color: string }>`
  background-color: ${prop => pallete[prop.color].color};
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  :hover {
    background-color: ${prop => pallete[prop.color].hover};
  }
`;

interface ButtonProp {
  color: "light" | "dark" | "primary" | "secondary" | "warning";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string | undefined;
}

function Button({
  color,
  onClick,
  children,
  className
}: React.PropsWithChildren<ButtonProp>) {
  return (
    <ButtonBlock className={className} color={color} onClick={onClick}>
      {children}
    </ButtonBlock>
  );
}

export default Button;
