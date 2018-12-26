import * as PropTypes from "prop-types";
import * as React from "react";

interface IButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default class Button extends React.Component<IButtonProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}
