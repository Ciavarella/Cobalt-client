import React from "react";
import { css, withStyles } from "../withStyles";

const Heading = ({ size, color = "default", styles, ...props }) => {
  const HeadingTag = `h${size}`;
  return <HeadingTag {...css(styles.Heading, styles[color])} {...props} />;
};

export default withStyles(({ theme }) => {
  return {
    heading: {},

    /* Color */
    default: {
      color: theme.default.color
    },
    primary: {
      color: theme.primary.color
    },
    secondary: {
      color: theme.secondary.color
    }
  };
})(Heading);
