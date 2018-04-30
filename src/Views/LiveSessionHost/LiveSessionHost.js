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

/* Socket */
import io from "socket.io-client";

/* TODO: Figure out better name */
class LiveSessionHost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* SIMULATE VALUES FOR DEBUGGING */
      debug: true,
      /* ------ */
      attendees: 0,
      settings: null,
      threshold: 50,
      red: "50",
      green: "50",
      time: "00:00",
      data: {},
      presentation: {
        hasStarted: false,
        isPaused: false,
        isStopped: false,
        currentSection: "Redux"
      }
    };

    const {
      match: {
        params: { sessionId }
      }
    } = this.props;

    this.sessionId = sessionId;
    this.handleClick = this.handleClick.bind(this);
    this.updateSession = this.updateSession.bind(this);
    this.pauseSession = this.pauseSession.bind(this);
    this.stopSession = this.stopSession.bind(this);
    this.counter = 0;
    this.socket = io(`http://10.126.4.146:7770`);
  }

  componentDidMount() {
    if (this.state.debug === false) {
      this.socket.on("connect", () => {
        this.socket.emit("joinSession", this.sessionId);
      });
      this.listenForEvents();
      return;
    }
    console.log("Debugging mode is enabled. Data is simulated.");
    this.simulateDecline();
  }

  getPercentageFromAvg(avg) {
    return Math.round((avg + 5) / 10 * 100);
  }

  listenForEvents() {
    this.socket.on("updateHost", data => {
      console.log(data);
      this.setState({
        red: data.engagement.negative,
        green: data.engagement.positive,
        attendees: data.attendees,
        settings: data.settings,
        average: data.engagement.average
      });
    });
  }

  handleClick() {
    this.setState(
      {
        presentation: {
          ...this.state.presentation,
          isStopped: true
        }
      },
      () => {
        this.socket.emit("presenterPayload", {
          session: this.sessionId,
          payload: this.state.presentation
        });
      }
    );
  }

  updateSession() {
    this.socket.emit("presenterPayload", {
      session: this.sessionId,
      payload: this.state.presentation
    });
  }

  stopSession() {
    this.setState(
      {
        presentation: {
          ...this.state.presentation,
          isStopped: true
        }
      },
      this.updateSession
    );
  }

  pauseSession() {
    this.setState(
      {
        presentation: {
          ...this.state.presentation,
          isPaused: !this.state.presentation.isPaused
        }
      },
      this.updateSession
    );
  }

  simulateDecline() {
    let num1, num2;
    num1 = 86;
    const intervalId = setInterval(() => {
      num1 <= 8 ? (num1 = 86) : num1--;
      num2 = 100 - num1;
      this.setState({
        green: num1,
        red: num2
      });
    }, 800);
  }

  render() {
    const { styles } = this.props;

    if (!this.state.presentation.hasStarted) {
      return <Lobby {...this.state} />;
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
            <Timer {...this.state} />
            <FlexContainer direction="row">
              <Button appearance="secondary" onClick={this.pauseSession}>
                {this.state.presentation.isPaused
                  ? "Continue session"
                  : "Pause session"}
              </Button>
              <Button appearance="danger" onClick={this.stopSession}>
                Stop session
              </Button>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer fullWidth="1" align="end" justify="end">
            <Heading size="2" appearance="white">
              {this.state.attendees} attendees
            </Heading>
            <CopyTextfield url="http://feed.io/xby6Jnb" />
          </FlexContainer>
        </div>
        <div {...css(styles.graphWrap)}>
          {this.state.red > this.state.threshold ? (
            <Warning {...this.state} />
          ) : (
            <Engagement {...this.state} />
          )}
        </div>
      </div>
    );
  }
}

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
