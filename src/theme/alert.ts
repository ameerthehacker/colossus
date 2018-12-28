import { lighten } from "polished";
import { colorLightener, colors, space } from "./variables";

export const alerts = {
  danger: {
    backgroundColor: lighten(colorLightener, colors.danger),
    borderLeft: `10px solid ${colors.danger}`,
    color: colors.contrast,
  },
  primary: {
    backgroundColor: lighten(colorLightener, colors.primary),
    borderLeft: `10px solid ${colors.primary}`,
    color: colors.contrast,
  },
  secondary: {
    backgroundColor: lighten(colorLightener, colors.secondary),
    borderLeft: `10px solid ${colors.secondary}`,
    color: colors.contrast,
  },
  success: {
    backgroundColor: lighten(colorLightener, colors.success),
    borderLeft: `10px solid ${colors.success}`,
    color: colors.contrast,
  },
  warning: {
    backgroundColor: lighten(colorLightener, colors.warning),
    borderLeft: `10px solid ${colors.warning}`,
    color: colors.contrast,
  },
};
