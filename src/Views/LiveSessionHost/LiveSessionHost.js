import React from "react";
import { css, withStyles } from "../../withStyles";
import moment from "moment";

import FlexContainer from "../../Containers/FlexContainer";
import CopyTextfield from "../../Elements/CopyTextfield";
import Button from "../../Elements/Button";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Input from "../../Elements/Input";

/* TODO: Figure out better name */
class LiveSessionHost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 60,
      audience: 60,
      threshold: 0.5,
      red: "24%",
      green: "76%",
      time: "00:00"
    };

    this.displayTime = this.displayTime.bind(this);
    this.counter = 0;
  }

  componentDidMount() {
    this.dummyPercentages();
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
            <div {...css(styles.timer)}>
              <span>{this.state.time}</span>
            </div>
            <Button appearance="secondary">Stop session</Button>
          </FlexContainer>
          <FlexContainer fullWidth="1" align="end" justify="end">
            <Heading size="4">{this.state.audience} attendees</Heading>
            <CopyTextfield url="http://feed.io/xby6Jnb" />
          </FlexContainer>
        </div>
        <div {...css(styles.graphWrap)}>
          <div
            {...css(styles.graphRed)}
            style={{ width: `${this.state.red}%` }}
          >
            <span>{this.state.red}%</span>
          </div>
          <div
            {...css(styles.graphGreen)}
            style={{ width: `${this.state.green}%` }}
          >
            <span>{this.state.green}%</span>
          </div>
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
    },
    graphRed: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "78px",
      color: "white",
      backgroundColor: colors.danger,
      ":after": {
        background: "inherit",
        bottom: "0",
        content: "''",
        display: "block",
        left: "0",
        position: "absolute",
        right: "0",
        transform: "skewX(-4deg)",
        height: "100%",
        width: "inherit",
        transition: "all 0.6s ease"
      }
    },
    graphGreen: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "78px",
      color: "white",
      backgroundColor: colors.success,
      ":after": {
        background: "inherit",
        bottom: "0",
        content: "''",
        display: "block",
        right: "0px",
        zIndex: "98",
        position: "absolute",
        transform: "skewX(-4deg)",
        transformOrigin: "100%",
        height: "100%",
        width: "inherit",
        transition: "all 0.6s ease"
      }
    },
    timer: {
      fontSize: "4.8rem",
      color: "white"
    }
  };
})(LiveSessionHost);
