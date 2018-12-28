import { lighten } from "polished";

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
}

const colors = {
  contrast: "#ECF0F1",
  danger: "#E74C3C",
  primary: "#2C3E50",
  secondary: "#34495E",
  success: "#27AE60",
  warning: "#E67E22",
};

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
const border = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
const colorLightener = 0.05;

export const defaultTheme = {
  buttonSizes: {
    lg: {
      borderRadius: border[3],
      fontSize: "large",
      fontWeight: "bold",
      padding: space[3],
    },
    md: {
      borderRadius: border[2],
      fontSize: "small",
      padding: space[2],
    },
    sm: {
      borderRadius: border[1],
      fontSize: "x-small",
      padding: space[1],
    },
  },
  buttons: {
    "danger": {
      "&:active": {
        backgroundColor: lighten(colorLightener, colors.danger),
      },
      "backgroundColor": colors.danger,
      "color": colors.contrast,
    },
    "danger-outline": {
      "&:hover": {
        backgroundColor: colors.danger,
        color: colors.contrast,
      },
      "backgroundColor": "white",
      "border": `2px solid ${colors.danger}`,
      "color": colors.danger,
    },
    "primary": {
      "&:active": {
        backgroundColor: lighten(colorLightener, colors.primary),
      },
      "backgroundColor": colors.primary,
      "color": colors.contrast,
    },
    "primary-outline": {
      "&:hover": {
        backgroundColor: colors.primary,
        color: colors.contrast,
      },
      "backgroundColor": "white",
      "border": `2px solid ${colors.primary}`,
      "color": colors.primary,
    },
    "secondary": {
      "&:active": {
        backgroundColor: lighten(colorLightener, colors.secondary),
      },
      "backgroundColor": colors.secondary,
      "color": colors.contrast,
    },
    "secondary-outline": {
      "&:hover": {
        backgroundColor: colors.secondary,
        color: colors.contrast,
      },
      "backgroundColor": "white",
      "border": `2px solid ${colors.secondary}`,
      "color": colors.secondary,
    },
    "success": {
      "&:active": {
        backgroundColor: lighten(colorLightener, colors.success),
      },
      "backgroundColor": colors.success,
      "color": colors.contrast,
    },
    "success-outline": {
      "&:hover": {
        backgroundColor: colors.success,
        color: colors.contrast,
      },
      "backgroundColor": "white",
      "border": `2px solid ${colors.success}`,
      "color": colors.success,
    },
    "warning": {
      "&:active": {
        backgroundColor: lighten(colorLightener, colors.warning),
      },
      "backgroundColor": colors.warning,
      "color": colors.contrast,
    },
    "warning-outline": {
      "&:hover": {
        backgroundColor: colors.warning,
        color: colors.contrast,
      },
      "backgroundColor": "white",
      "border": `2px solid ${colors.warning}`,
      "color": colors.warning,
    },
  },
  colors,
  space,
};
