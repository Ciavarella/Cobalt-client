import React from "react";
import { css, withStyles } from "../withStyles";

import Card from "../Elements/Card";
import Button from "../Elements/Button";
import Heading from "../Elements/Heading";
import FlexContainer from "../Containers/FlexContainer";

const SessionItemCard = ({ styles, ...props }) => (
  <FlexContainer>
    <Card
      appearance="primary"
      style={{ margin: "10px", width: "400px", height: "233px" }}
    >
      <FlexContainer style={{ height: "100%" }} justify="center">
        <Heading size="4">Host a new session!</Heading>
        <Button appearance="secondary">Start New</Button>
      </FlexContainer>
    </Card>
  </FlexContainer>
);

export default withStyles(({ themes }) => {
  return {
    SessionItemCard: {},

    default: themes.default,
    primary: themes.primary,
    secondary: themes.secondary
  };
})(SessionItemCard);
