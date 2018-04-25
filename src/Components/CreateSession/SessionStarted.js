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

const SessionStarted = ({ styles, sessionId = null }) => (
  <FlexContainer align="start">
    <Heading appearance="primary" size="2">
      Have a great session!
    </Heading>
    <Paragraph size="normal">
      Here is your unique session url. Share it with your audience.
    </Paragraph>
    <CopyTextfield
      url={`http://feedback.io/${sessionId}`}
      style={{ width: "100%" }}
    />
  </FlexContainer>
);

export default withStyles(({}) => {
  return {
    sessionStarted: {}
  };
})(SessionStarted);
