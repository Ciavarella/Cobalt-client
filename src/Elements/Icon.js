import React from "react";
import { css, withStyles } from "../withStyles";

const Icon = ({ appearance = "default", size = "small", styles, ...props }) => (
  <span {...css(styles.icon, styles[size], styles[appearance])} {...props} />
);

export default withStyles(({ themes, text }) => {
  return {
    icon: {},

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

    /* Size */
    small: text.small,
    medium: text.medium,
    large: text.large
  };
})(Icon);
