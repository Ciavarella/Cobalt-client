import React from "react";
import { css, withStyles } from "../withStyles";

const Card = ({ appearance = "default", shadow = null, styles, ...props }) => (
  <div {...css(styles.card, styles[appearance], styles[shadow])} {...props} />
);

export default withStyles(({ themes, shadow }) => {
  return {
    card: {
      padding: "40px",
      margin: "40px"
    },

    /* Color */
    default: themes.default,
    primary: themes.primary,
    secondary: themes.secondary,
    success: themes.success,
    danger: themes.danger,

    /* Shadow */
    shadow: shadow
  };
})(Card);
