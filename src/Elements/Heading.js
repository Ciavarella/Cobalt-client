import React from "react";
import { css, withStyles } from "../withStyles";

const Heading = ({ size, appearance = "default", styles, ...props }) => {
  const HeadingTag = `h${size}`;
  return <HeadingTag {...css(styles.Heading, styles[appearance])} {...props} />;
};

export default withStyles(({ themes }) => {
  return {
    heading: {},

    /* Color */
    default: {
      color: themes.default.color
    },
    primary: {
      color: themes.primary.color
    },
    secondary: {
      color: themes.secondary.color
    }
  };
})(Heading);
