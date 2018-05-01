import React from "react";
import { css, withStyles } from "../../withStyles";

import FlexContainer from "../../Containers/FlexContainer";
import CopyTextfield from "../../Elements/CopyTextfield";
import Button from "../../Elements/Button";
import Notification from "../../Elements/Notification";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Input from "../../Elements/Input";
import Warning from "./Warning";
import Engagement from "./Engagement";
import Timer from "./Timer";
import Lobby from "./Lobby";
import EndSession from "./EndSession";

/* TODO: Figure out better name */
const LiveSessionHost = ({ styles, ...props }) => {
  console.log(props);
  if (!props.data.presentation.hasStarted) {
    return <Lobby {...props} />;
  }

  if (props.data.presentation.isStopped) {
    return <EndSession {...props} />;
  }

  return (
    <div {...css(styles.LiveSessionHost)}>
      <div {...css(styles.interface)}>
        <FlexContainer
          justify="between"
          align="center"
          direction="row"
          fullWidth="1"
        >
          <Timer {...props} />
          <FlexContainer direction="row">
            <Button appearance="secondary" onClick={props.pauseSession}>
              {props.data.presentation.isPaused
                ? "Continue session"
                : "Pause session"}
            </Button>
            <Button appearance="danger" onClick={props.stopSession}>
              Stop session
            </Button>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer fullWidth="1" align="end" justify="end">
          <Heading size="2" appearance="white">
            {props.data.attendees} attendees
          </Heading>
          <CopyTextfield url="http://feed.io/xby6Jnb" />
        </FlexContainer>
      </div>
      <div {...css(styles.graphWrap)}>
        {props.data.red > props.data.threshold ? (
          <Warning {...props} />
        ) : (
          <Engagement {...props} />
        )}
      </div>
    </div>
  );
};

export default withStyles(({ themes, text, colors }) => {
  return {
    LiveSessionHost: {
      backgroundColor: colors.sand,
      padding: "0 16px",
      height: "90vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column"
    },
    interface: {
      zIndex: "99",
      padding: "0px 16px",
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    graphWrap: {
      width: "100%",
      height: "100%",
      position: "absolute",
      display: "flex",
      overflow: "hidden",
      flexDirection: "row",
      ":nth-child(1n) span": {
        zIndex: "999"
      }
    }
  };
})(LiveSessionHost);
