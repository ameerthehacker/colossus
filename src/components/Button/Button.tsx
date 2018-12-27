import * as React from "react";
import {
  background,
  border,
  borderRadius,
  buttonStyle,
  color,
  space,
  variant,
} from "styled-system";
import styled from "../../styled-components";
import { defaultTheme, ITheme } from "../../theme";

interface IButtonProps {
  bg?: "primary" | "secondary" | "warning" | "danger" | "success" | "contrast";
  color?:
    | "primary"
    | "secondary"
    | "warning"
    | "danger"
    | "success"
    | "contrast";
  border?: number;
  p?: number;
  borderRadius?: number;
  variant?: "primary" | "secondary" | "warning" | "danger" | "success";
  theme?: ITheme;
  sz?: string;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const buttonSizes = variant({
  key: "buttonSizes",
  prop: "sz",
});

const ButtonStyled = styled("button")<IButtonProps>`
  ${background}
  ${color}
  ${border}
  ${space}
  ${borderRadius}
  ${buttonStyle}
  ${buttonSizes}
`;

ButtonStyled.defaultProps = {
  bg: "primary",
  border: 0,
  borderRadius: 5,
  color: "contrast",
  p: 5,
  sz: "md",
  theme: defaultTheme,
  variant: "primary",
};

const Button = (props: IButtonProps) => <ButtonStyled {...props} />;

export default Button;
