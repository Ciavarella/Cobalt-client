import React from "react";
import { css, withStyles } from "../withStyles";

const Button = ({ color = "default", size = "medium", styles, ...props }) => (
  <button {...css(styles.button, styles[color], styles[size])} {...props} />
);

export default withStyles(({ theme, text }) => {
  return {
    button: {
      padding: "12px 24px",
      marginBottom: "12px"
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
})(Button);
