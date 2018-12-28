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
  ${buttonStyle}
  ${buttonSizes}
`;

ButtonStyled.defaultProps = {
  sz: "md",
  theme: defaultTheme,
  variant: "primary",
};

const Button = (props: IButtonProps) => <ButtonStyled {...props} />;

export default Button;
