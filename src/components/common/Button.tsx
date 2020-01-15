import React from "react";
import styled from "styled-components";

interface ColorPallete {
  [key: string]: string;
}

const pallete: ColorPallete = {
  light: "#f8f9fa",
  dark: "#343a40",
  primary: "#007bff",
  secondary: "#6c757d",
  warning: "#ffc107"
};

const ButtonBlock = styled.button<{ color: string }>`
  background-color: ${prop => pallete[prop.color]};
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
`;

interface ButtonProp {
  color: "light" | "dark" | "primary" | "secondary" | "warning";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Button({
  color,
  onClick,
  children
}: React.PropsWithChildren<ButtonProp>) {
  return (
    <ButtonBlock color={color} onClick={onClick}>
      {children}
    </ButtonBlock>
  );
}

export default Button;
