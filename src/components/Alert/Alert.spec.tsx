import { mount } from "enzyme";
import * as React from "react";
import Alert, { AlertCloseBtnStyled, AlertStyled } from "./Alert";

describe("Alert", () => {
  it("should dismiss the alert when close button is clicked", () => {
    const component = mount(<Alert dismissible={true} />);
    const alertCloseBtnComponent = component.find(AlertCloseBtnStyled);

    expect(component.find(AlertStyled).exists()).toBeTruthy();

    alertCloseBtnComponent.simulate("click");

    expect(component.find(AlertStyled).exists()).toBeFalsy();
  });

  it("should trigger the onDismiss callback when close button is clicked", () => {
    const cb = jest.fn();
    const component = mount(<Alert dismissible={true} onDismiss={cb} />);
    const alertCloseBtnComponent = component.find(AlertCloseBtnStyled);

    alertCloseBtnComponent.simulate("click");

    expect(cb).toBeCalled();
  });

  it("should render the close button when isDismissible is true", () => {
    const component = mount(<Alert dismissible={true} />);
    const alertCloseBtnComponent = component.find(AlertCloseBtnStyled);

    expect(alertCloseBtnComponent.exists()).toBeTruthy();
  });

  it("should not render the close button when isDismissible is false", () => {
    const component = mount(<Alert dismissible={false} />);
    const alertCloseBtnComponent = component.find(AlertCloseBtnStyled);

    expect(alertCloseBtnComponent.exists()).toBeFalsy();
  });
});
