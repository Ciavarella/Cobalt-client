import React from "react";
import { css, withStyles } from "../withStyles";

const Icon = ({
  icon = null,
  fillColor = "white",
  size = "small",
  styles,
  ...props
}) => (
  <span {...css(styles.icon, styles[size], styles[fillColor])} {...props}>
    <i className={icon} />
  </span>
);

export default withStyles(({ colors, text }) => {
  return {
    icon: {
      padding: "14px"
    },
    /** TODO: change from fontawesome to svg? */

    /* Size */
    xs: text.xs,
    small: text.small,
    medium: text.medium,
    large: text.large,
    /* Color */
    primary: { color: colors.primary },
    secondary: { color: colors.secondary },
    danger: { color: colors.danger },
    dawn: { color: colors.dawn },
    nightsky: { color: colors.nightsky },
    carbon: { color: colors.carbon },
    darkMetal: { color: colors.darkMetal },
    aluminum: { color: colors.aluminum },
    sand: { color: colors.sand },
    white: { color: "#FFF" }
  };
})(Icon);
