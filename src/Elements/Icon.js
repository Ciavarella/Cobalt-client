import React from "react";
import { css, withStyles } from "../withStyles";

const Icon = ({ appearance = "default", size = "small", styles, ...props }) => (
  <span {...css(styles.icon, styles[size], styles[appearance])} {...props} />
);

export default withStyles(({ themes, text, colors }) => {
  return {
    icon: {
      padding: "14px"
    },
    /* TODO: Refactor to accept icon-name, height, width, fillColor, use svg */
    /* Color */

    /* Color */
    default: {
      color: themes.default.color
    },
    primary: {
      color: themes.primary.color
    },
    secondary: {
      color: themes.secondary.color
    },
    danger: {
      color: colors.danger
    },
    dawn: {
      color: colors.dawn
    },

    /* Size */
    small: text.small,
    medium: text.medium,
    large: text.large
  };
})(Icon);
