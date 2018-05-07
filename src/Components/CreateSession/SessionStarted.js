import React from "react";

import FlexContainer from "../../Containers/FlexContainer";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import CopyTextfield from "../../Elements/CopyTextfield";

const SessionStarted = ({ sessionId = null }) => (
  <FlexContainer align="start">
    <Heading appearance="primary" size="2">
      Have a great session!
    </Heading>
    <Paragraph size="normal">
      Here is your unique session url. Share it with your audience.
    </Paragraph>
    <CopyTextfield
      url={`${process.env.REACT_APP_CLIENT_BASE_URL}/session/${sessionId}`}
      style={{ width: "100%" }}
    />
  </FlexContainer>
);

export default SessionStarted;
