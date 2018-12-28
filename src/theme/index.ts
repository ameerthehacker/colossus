import { alerts } from "./alert";
import { buttons, buttonSizes } from "./button";
import { colors, space } from "./variables";

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
  buttonSizes,
  buttons,
  colors,
  space,
};
