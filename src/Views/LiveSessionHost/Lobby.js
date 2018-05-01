import React from "react";
import { css, withStyles } from "../../withStyles";
import FlexContainer from "../../Containers/FlexContainer";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Button from "../../Elements/Button";
import CopyTextfield from "../../Elements/CopyTextfield";

const Lobby = ({ styles, ...props }) => {
  return (
    <div {...css(styles.lobby)}>
      <FlexContainer direction="row" fullWidth="1" justify="end">
        <Button appearance="danger">Cancel session </Button>
        <Button appearance="secondary">Settings </Button>
      </FlexContainer>
      <FlexContainer flex="1" align="center" justify="center">
        <Heading size="2">Your session is ready!</Heading>
        <Paragraph>
          Whenever you are ready, click the button to start!
        </Paragraph>
        <Button appearance="primary" onClick={props.startSession}>
          Let's go!
        </Button>
        <Heading size="3">{props.data.attendees} attendees in lobby</Heading>
      </FlexContainer>
      <FlexContainer fullWidth="1" align="end" justify="end">
        <CopyTextfield url={props.sessionId} />
      </FlexContainer>
    </div>
  );
};

export default withStyles(({ colors }) => {
  return {
    lobby: {
      display: "flex",
      padding: "0px 20px",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "center",
      height: "100vh",
      backgroundColor: colors.sand
    },
    icon: {
      width: "128px",
      marginBottom: "48px"
    }
  };
})(Lobby);
