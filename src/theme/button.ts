import { lighten } from "polished";
import { border, colorLightener, colors, space } from "./variables";

export const buttonSizes = {
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
};

export const buttons = {
  "danger": {
    "&:active": {
      backgroundColor: lighten(colorLightener, colors.danger),
    },
    "backgroundColor": colors.danger,
    "border": 0,
    "color": colors.contrast,
  },
  "danger-outline": {
    "&:hover": {
      backgroundColor: colors.danger,
      color: colors.contrast,
    },
    "backgroundColor": "white",
    "border": `${border[1]}px solid ${colors.danger}`,
    "color": colors.danger,
  },
  "primary": {
    "&:active": {
      backgroundColor: lighten(colorLightener, colors.primary),
    },
    "backgroundColor": colors.primary,
    "border": 0,
    "color": colors.contrast,
  },
  "primary-outline": {
    "&:hover": {
      backgroundColor: colors.primary,
      color: colors.contrast,
    },
    "backgroundColor": "white",
    "border": `${border[1]}px solid ${colors.primary}`,
    "color": colors.primary,
  },
  "secondary": {
    "&:active": {
      backgroundColor: lighten(colorLightener, colors.secondary),
    },
    "backgroundColor": colors.secondary,
    "border": 0,
    "color": colors.contrast,
  },
  "secondary-outline": {
    "&:hover": {
      backgroundColor: colors.secondary,
      color: colors.contrast,
    },
    "backgroundColor": "white",
    "border": `${border[1]}px solid ${colors.secondary}`,
    "color": colors.secondary,
  },
  "success": {
    "&:active": {
      backgroundColor: lighten(colorLightener, colors.success),
    },
    "backgroundColor": colors.success,
    "border": 0,
    "color": colors.contrast,
  },
  "success-outline": {
    "&:hover": {
      backgroundColor: colors.success,
      color: colors.contrast,
    },
    "backgroundColor": "white",
    "border": `${border[1]}px solid ${colors.success}`,
    "color": colors.success,
  },
  "warning": {
    "&:active": {
      backgroundColor: lighten(colorLightener, colors.warning),
    },
    "backgroundColor": colors.warning,
    "border": 0,
    "color": colors.contrast,
  },
  "warning-outline": {
    "&:hover": {
      backgroundColor: colors.warning,
      color: colors.contrast,
    },
    "backgroundColor": "white",
    "border": `${border[1]}px solid ${colors.warning}`,
    "color": colors.warning,
  },
};
