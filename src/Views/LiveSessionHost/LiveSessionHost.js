import React from "react";
import { css, withStyles } from "../../withStyles";
import moment from "moment";

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

/* Socket */
import io from "socket.io-client";

/* TODO: Figure out better name */
class LiveSessionHost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* SIMULATE VALUES FOR DEBUGGING */
      debug: false,
      /* ------ */
      attendees: 0,
      settings: null,
      threshold: 50,
      red: "50",
      green: "50",
      time: "00:00",
      data: {},
      presentation: {
        isPaused: true,
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
    this.displayTime = this.displayTime.bind(this);
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
      let timerId = setInterval(this.displayTime, 1000);
    }

    console.log("Debugging...");
    this.simulateDecline();
  }

  getPercentageFromAvg(avg) {
    let perc = Math.round((avg + 5) / 10 * 100);

    return perc;
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

  displayTime() {
    if (this.state.presentation.isPaused) return;

    let time =
      this.counter >= 3600
        ? moment()
            .hour(0)
            .minute(0)
            .second(this.counter++)
            .format("h:mm:ss")
        : moment()
            .minute(0)
            .second(this.counter++)
            .format("mm:ss");
    this.setState({
      time: time
    });
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
    }, 300);
  }

  render() {
    const { styles } = this.props;
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
            <Button appearance="danger" onClick={this.stopSession}>
              Stop session
            </Button>
            <Heading size="2" appearance="white">
              {this.state.attendees} attendees
            </Heading>
            <Button appearance="secondary" onClick={this.pauseSession}>
              {this.state.presentation.isPaused ? "Continue" : "Pause"}
            </Button>
          </FlexContainer>
          <FlexContainer fullWidth="1" align="end" justify="end">
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
