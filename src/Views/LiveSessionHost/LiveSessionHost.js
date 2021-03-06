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
import Paused from "./Paused";
import EndSession from "./EndSession";

const LiveSessionHost = ({ styles, ...props }) => {
  if (props.data.status.hasEnded) {
    return <EndSession {...props} />;
  }

  if (props.data.status.hasStarted === false) {
    return <Lobby {...props} />;
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
            <Button appearance="secondary" onClick={props.switchData}>
              Switch to {props.data.status.isAverage ? "Percent" : "Average"}
            </Button>
            <Button appearance="secondary" onClick={props.pauseSession}>
              {props.data.status.isPaused
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
          <CopyTextfield
            url={`${process.env.REACT_APP_CLIENT_BASE_URL}/session/${
              props.data.sessionId
            }`}
          />
        </FlexContainer>
      </div>
      {props.data.status.isPaused ? <Paused {...props} /> : ""}
      <div {...css(styles.graphWrap)}>
        {/* TODO: Fix threshold when isAverage! */}
        {props.data.engagement.negative > props.data.settings.threshold ? (
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
      zIndex: "999",
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
        zIndex: "997"
      }
    }
  };
})(LiveSessionHost);
