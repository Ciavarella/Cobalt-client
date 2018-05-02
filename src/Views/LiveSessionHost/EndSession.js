import React from "react";
import { css, withStyles } from "../../withStyles";
import FlexContainer from "../../Containers/FlexContainer";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Button from "../../Elements/Button";
import ButtonLink from "../../Elements/ButtonLink";
import CopyTextfield from "../../Elements/CopyTextfield";

const EndSession = ({ styles, ...props }) => {
  return (
    <div {...css(styles.endSession)}>
      <FlexContainer flex="1" align="center" justify="center">
        <Heading size="2">Your session has ended!</Heading>
        <Paragraph>
          Great job! Click the link below to see impressions and feedback
          gathered from your audience!
        </Paragraph>
        <FlexContainer direction="row">
          <Button appearance="primary" onClick={props.startSession}>
            View summary
          </Button>
          <ButtonLink to="/dashboard" appearance="danger">
            Return
          </ButtonLink>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
};

export default withStyles(({ colors }) => {
  return {
    endSession: {
      display: "flex",
      padding: "0px 20px",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "center",
      height: "100vh",
      backgroundColor: colors.sand,
      animation: "fade 0.5s ease",
      willChange: "transform, opacity"
    },
    icon: {
      width: "128px",
      marginBottom: "48px"
    }
  };
})(EndSession);
