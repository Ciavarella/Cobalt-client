import React from "react";
import { css, withStyles } from "../withStyles";

const Heading = ({ type, color = "default", styles, ...props }) => {
  const HeadingTag = `${type}`;
  return <HeadingTag {...css(styles.Heading, styles[color])} {...props} />;
};

export default withStyles(({ theme }) => {
  return {
    heading: {},

    /* Color */
    default: theme.default,
    primary: theme.primary,
    secondary: theme.secondary
  };
})(Heading);
