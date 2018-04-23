import React from "react";
import { css, withStyles } from "../withStyles";

const Paragraph = ({ size = "normal", styles, ...props }) => (
  <p {...css(styles.paragraph, styles[size])} {...props} />
);

export default withStyles(({ themes, text, colors }) => {
  return {
    paragraph: {
      color: colors.darkMetal
    },

    /* Size */
    sub: text.xs,
    normal: text.small,
    leading: text.medium
  };
})(Paragraph);
