import * as React from "react";
import { variant } from "styled-system";
import styled from "../../styled-components";
import { defaultTheme, ITheme } from "../../theme";
import { space } from "../../theme/variables";

// There is two interfaces to avoid the warning `unknown event handler`

interface IAlertStyledProps {
  variant?: "primary" | "secondary" | "warning" | "danger" | "success";
  theme?: ITheme;
  dismissible?: boolean;
}

interface IAlertProps {
  variant?: "primary" | "secondary" | "warning" | "danger" | "success";
  theme?: ITheme;
  dismissible?: boolean;
  onDismiss?: (evt: Alert) => void;
}

interface IAlertState {
  isVisible: boolean;
}

const alerts = variant({
  key: "alerts",
  prop: "variant",
});

export const AlertStyled = styled("div")<IAlertStyledProps>`
  ${alerts}
  padding: ${space[2]}px
`;

export const AlertCloseBtnStyled = styled("span")`
  float: right;
  cursor: pointer;
`;

export default class Alert extends React.Component<IAlertProps, IAlertState> {
  public static defaultProps = {
    dismissible: false,
    theme: defaultTheme,
    variant: "primary",
  };

  constructor(props: IAlertProps) {
    super(props);
    this.state = { isVisible: true };
    this.dismissAlert = this.dismissAlert.bind(this);
  }

  public dismissAlert() {
    this.setState({
      isVisible: false,
    });
    if (this.props.onDismiss !== undefined) {
      this.props.onDismiss(this);
    }
  }

  public render() {
    const dismissBtn = this.props.dismissible ? (
      <AlertCloseBtnStyled onClick={this.dismissAlert}>
        &times;
      </AlertCloseBtnStyled>
    ) : (
      ""
    );
    const alert = this.state.isVisible ? (
      <AlertStyled
        variant={this.props.variant}
        theme={this.props.theme}
        dismissible={this.props.dismissible}
      >
        {this.props.children}
        {dismissBtn}
      </AlertStyled>
    ) : (
      ""
    );

    return alert;
  }
}
