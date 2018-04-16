import React from "react";
import { css, withStyles } from "../withStyles";

const Icon = ({ appearance = "default", size = "small", styles, ...props }) => (
  <span {...css(styles.icon, styles[size], styles[appearance])} {...props} />
);

export default withStyles(({ themes, text }) => {
  return {
    icon: {
      padding: "14px"
    },

    /* Color */
    default: themes.default,
    primary: themes.primary,
    secondary: themes.secondary,

    /* Size */
    small: text.small,
    medium: text.medium,
    large: text.large
  };
})(Icon);
