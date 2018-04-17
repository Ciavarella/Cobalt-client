import React from "react";
import { css, withStyles } from "../withStyles";
// import header here!
import Button from "../Elements/Button";
import Heading from "../Elements/Heading";
import Input from "../Elements/Input";
import FlexContainer from "../Containers/FlexContainer";

const LandingPage = ({ size = "medium", styles, ...props }) => (
  //Header here!
  <div {...css(styles.LandingPage)} {...props}>
    <FlexContainer>
      <Heading size="2">
        Have a unique code? Paste it here to enter your session!
      </Heading>
      <FlexContainer direction="row">
        <Input placeholder="Session Code" />
        <Button appearance="secondary">Join</Button>
      </FlexContainer>
    </FlexContainer>
  </div>
);

export default withStyles(({ theme, text }) => {
  return {
    LandingPage: {
      minHeight: "100%",
      padding: "24px",
      backgroundColor: "grey"
    },
    small: text.small,
    medium: text.medium,
    large: text.large
  };
})(LandingPage);
