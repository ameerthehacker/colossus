import { alerts } from "./alert";
import { buttons, buttonSizes } from "./button";
import { border, colors, space } from "./variables";

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    warning: string;
    danger: string;
    success: string;
    contrast: string;
  };
  space: number[];
  buttons: object;
  buttonSizes: object;
}

export const defaultTheme = {
  alerts,
  border,
  buttonSizes,
  buttons,
  colors,
  space,
};
