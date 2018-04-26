import React from "react";
import { css, withStyles } from "../../withStyles";

import FlexContainer from "../../Containers/FlexContainer";
import Modal from "../Modal";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Button from "../../Elements/Button";
import Input from "../../Elements/Input";
import Icon from "../../Elements/Icon";

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

export default withStyles(({}) => {
  return {
    name: {}
  };
})(Name);
