import React from "react";
import { css, withStyles } from "../withStyles";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import Button from "../Elements/Button";

const NotFound = ({ url, size = "medium", styles, ...props }) => (
  <div {...css(styles.notFound, styles[size])} {...props}>
    <Heading size="2">404 page not found</Heading>
    <Paragraph>We are sorry but the page: "{url}" could not be found</Paragraph>
    <Button>Click here to go back</Button>
  </div>
);

export default withStyles(({ theme, text }) => {
  return {
    notFound: {
      // Add some styling here
    },

    /* Size */
    small: text.small,
    medium: text.medium,
    large: text.large
  };
})(NotFound);
