import React from "react";
import { css, withStyles } from "../withStyles";

const Icon = ({ color = "default", size = "small", styles, ...props }) => (
  <span {...css(styles.icon, styles[size], styles[color])} {...props} />
);

export default withStyles(({ theme, text }) => {
  return {
    icon: {
      padding: "14px"
    },

    /* Color */
    default: theme.default,
    primary: theme.primary,
    secondary: theme.secondary,

    /* Size */
    small: text.small,
    medium: text.medium,
    large: text.large
  };
})(Icon);
