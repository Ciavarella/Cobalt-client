import React from "react";
import { css, withStyles } from "../../withStyles";
import FlexContainer from "../../Containers/FlexContainer";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Button from "../../Elements/Button";
import CopyTextfield from "../../Elements/CopyTextfield";

import io from "socket.io-client";

class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: 0
    };
    this.socket = io(process.env.REACT_APP_API_BASE_URL);
  }

  listenForEvents() {
    this.socket.on("updateHost", data => {
      console.log(data);
      this.setState({
        attendees: data.attendees,
        settings: data.settings
      });
    });
  }

  render() {
    const { styles } = this.props;
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
          <Button appearance="primary">Let's go!</Button>
          <Heading size="3">{this.state.attendees} attendees in lobby</Heading>
        </FlexContainer>
        <FlexContainer fullWidth="1" align="end" justify="end">
          <CopyTextfield url="http://feed.io/xby6Jnb" />
        </FlexContainer>
      </div>
    );
  }
}

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
