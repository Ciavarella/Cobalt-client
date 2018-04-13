import React from "react";
import { css, withStyles } from "../withStyles";

const Paragraph = ({ size = "normal", styles, ...props }) => (
  <p {...css(styles.paragraph, styles[size])} {...props} />
);

export default withStyles(({ theme, text }) => {
  return {
    paragraph: {
      // Add more styling here
    },

    /* Size */
    sub: text.small,
    normal: text.medium,
    leading: text.large
  };
})(Paragraph);
