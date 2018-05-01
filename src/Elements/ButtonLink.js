import React from "react";
import { css, withStyles } from "../withStyles";
import { Link } from "react-router-dom";

const ButtonLink = ({
  appearance = "primary",
  size = "medium",
  to = null,
  styles,
  ...props
}) => (
  <Link
    to={to}
    {...css(styles.buttonLink, styles[appearance], styles[size])}
    {...props}
  />
);

export default withStyles(({ themes, text }) => {
  return {
    buttonLink: {
      minWidth: "100px",
      padding: "16px 24px",
      border: "none",
      borderRadius: "4px",
      margin: "12px 12px 12px 0px",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "white"
    },

    /* Color */
    default: themes.default,
    primary: themes.primary,
    secondary: themes.secondary,
    success: themes.success,
    danger: themes.danger,
    primaryGradient: themes.primaryGradient,
    secondaryGradient: themes.secondaryGradient,
    successGradient: themes.successGradient,
    dangerGradient: themes.dangerGradient
  };
})(ButtonLink);
