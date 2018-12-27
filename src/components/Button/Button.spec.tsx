import { mount } from "enzyme";
import * as React from "react";
import Button from "./Button";

describe("Button", () => {
  it("should emit the onClick event", () => {
    const onClickCallback = jest.fn();
    const component = mount(<Button onClick={onClickCallback} />);

    component.simulate("click");

    expect(onClickCallback).toBeCalled();
  });
});
