import React from "react";
import { css, withStyles } from "../../withStyles";
import moment from "moment";

import FlexContainer from "../../Containers/FlexContainer";
import CopyTextfield from "../../Elements/CopyTextfield";
import Button from "../../Elements/Button";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Input from "../../Elements/Input";
import Warning from "./Warning";
import Engagement from "./Engagement";
import Timer from "./Timer";

/* TODO: Figure out better name */
class LiveSessionHost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 60,
      audience: 60,
      threshold: 35,
      red: "50",
      green: "50",
      time: "00:00"
    };

    this.displayTime = this.displayTime.bind(this);
    this.counter = 0;
  }

  componentDidMount() {
    this.simulateDecline();
    let timerId = setInterval(this.displayTime, 1000);
  }

  displayTime() {
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

  dummyPercentages() {
    let num1, num2;
    num1 = Math.round(Math.random() * 99);
    const intervalId = setInterval(() => {
      num1 = Math.round(Math.random() * 99);
      num2 = 100 - num1;
      this.setState({
        green: num1,
        red: num2
      });
    }, 1000);
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
    }, 1000);
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
            <Button appearance="secondary">Stop session</Button>
          </FlexContainer>
          <FlexContainer fullWidth="1" align="end" justify="end">
            <Heading size="4">{this.state.audience} attendees</Heading>
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
