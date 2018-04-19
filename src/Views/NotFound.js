import React from "react";
import { css, withStyles } from "../withStyles";
import FlexContainer from "../Containers/FlexContainer";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import Button from "../Elements/Button";

const NotFound = ({ url, styles, ...props }) => (
  <div {...css(styles.notFound)}>
    <FlexContainer>
      <Heading size="2">404 page not found</Heading>
      <Paragraph>
        We are sorry but the page: "{url}" could not be found
      </Paragraph>
      <Button appearance="primary">Click here to go back</Button>
    </FlexContainer>
  </div>
);

export default withStyles(({ colors }) => {
  return {
    notFound: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: colors.sand
    }
  };
})(NotFound);
