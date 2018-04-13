import React from "react";
import { css, withStyles } from "../withStyles";

const Paragraph = ({ size = "medium", styles, ...props }) => (
  <p {...css(styles.paragraph, styles[size])} {...props} />
);

export default withStyles(({ theme, text }) => {
  return {
    paragraph: {
      // Add more styling here
    },

    /* Size */
    small: text.small,
    medium: text.medium,
    large: text.large
  };
})(Paragraph);
