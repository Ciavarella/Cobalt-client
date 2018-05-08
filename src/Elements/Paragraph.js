import React from "react";
import { css, withStyles } from "../withStyles";

const Paragraph = ({
  appearance = "darkMetal",
  size = "normal",
  styles,
  ...props
}) => <p {...css(styles[appearance], styles[size])} {...props} />;

export default withStyles(({ themes, text, colors }) => {
  return {
    primary: { color: colors.primary },
    secondary: { color: colors.secondary },
    success: { color: colors.success },
    danger: { color: colors.danger },
    nightsky: { color: colors.nightsky },
    dawn: { color: colors.dawn },
    carbon: { color: colors.carbon },
    aluminum: { color: colors.aluminum },
    darkMetal: { color: colors.darkMetal },
    sand: { color: colors.sand },
    white: { color: "#fff" },

    /* Size */
    sub: text.xs,
    normal: text.small,
    leading: text.medium
  };
})(Paragraph);
