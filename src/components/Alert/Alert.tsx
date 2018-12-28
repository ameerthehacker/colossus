import * as React from "react";
import { variant } from "styled-system";
import styled from "../../styled-components";
import { defaultTheme, ITheme } from "../../theme";
import { space } from "../../theme/variables";

interface IAlertProps {
  variant?: "primary" | "secondary" | "warning" | "danger" | "success";
  theme?: ITheme;
}

const alerts = variant({
  key: "alerts",
  prop: "variant",
});

const AlertStyled = styled("div")<IAlertProps>`
  ${alerts}
  padding: ${space[2]}px
`;

AlertStyled.defaultProps = {
  theme: defaultTheme,
  variant: "primary",
};

const Alert = (props: IAlertProps) => <AlertStyled {...props} />;

export default Alert;
