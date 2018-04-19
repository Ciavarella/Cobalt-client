import React, { Component } from "react";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";
import Button from "../Elements/Button";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import Input from "../Elements/Input";

class JoinSession extends React.Component {
  constructor({ styles, ...props }) {
    super(props);
    this.state = {};
  }

  handleSubmit(e) {}

  handleChange(e) {}

  render() {
    return (
      <FlexContainer>
        <Heading size="1" appearance="secondary">
          Have a unique code? Paste it here to enter your session!
        </Heading>
        <FlexContainer direction="row">
          <Input />
          <Button>JOIN</Button>
        </FlexContainer>
      </FlexContainer>
    );
  }
}

export default withStyles(({ themes, text, colors }) => {
  return {
    JoinSession: {}
  };
})(JoinSession);
