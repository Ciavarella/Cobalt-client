import React from "react";
import { withStyles } from "../../withStyles";

import FlexContainer from "../../Containers/FlexContainer";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Input from "../../Elements/Input";

const Name = ({ styles }) => (
  <FlexContainer align="start">
    <Heading appearance="primary" size="2">
      Session name
    </Heading>
    <Paragraph size="normal">
      What do you want to call your session? Try to be descriptive!
    </Paragraph>
    <Input
      type="text"
      name="name"
      placeholder="Enter session name"
      style={{ marginLeft: "0px" }}
    />
  </FlexContainer>
);

export default withStyles(() => {
  return {
    name: {}
  };
})(Name);
