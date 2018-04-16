import React from "react";
import { css, withStyles } from "../withStyles";

const Button = ({ color = "default", size = "medium", styles, ...props }) => (
  <button {...css(styles.button, styles[color], styles[size])} {...props} />
);

export default withStyles(({ theme, text }) => {
  return {
    button: {
      minWidth: "120px",
      padding: "12px 24px",
      border: "2px solid",
      borderRadius: "4px",
      margin: "12px 12px 12px 12px"
    },

    /* Color */
    default: theme.default,
    primary: theme.primary,
    secondary: theme.secondary,
    success: theme.success,
    danger: theme.danger,

    /* Size */
    xs: text.xs,
    small: text.small,
    medium: text.medium,
    large: text.large
  };
})(Button);
