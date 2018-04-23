import React from "react";
import { css, withStyles } from "../../withStyles";

import FlexContainer from "../../Containers/FlexContainer";
import Modal from "../Modal";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Button from "../../Elements/Button";
import Input from "../../Elements/Input";
import InputWithIcon from "../../Elements/InputWithIcon";
import Icon from "../../Elements/Icon";
import CopyTextfield from "../../Elements/CopyTextfield";

const End = ({ styles }) => (
  <FlexContainer align="start">
    <Heading appearance="primary" size="2">
      Have a greate session!
    </Heading>
    <Paragraph size="normal">
      What do you want to call your session? Try to be descriptive!
    </Paragraph>
    <CopyTextfield url="http://feedback.io/DUMMY" style={{ width: "100%" }} />
  </FlexContainer>
);

export default withStyles(({}) => {
  return {
    end: {}
  };
})(End);
