import React from "react";
import { Redirect } from "react-router-dom";
import { css, withStyles } from "../withStyles";

import Button from "../Elements/Button";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import FlexContainer from "../Containers/FlexContainer";
import VoteSlider from "../Components/VoteSlider";
import Modal from "../Components/Modal";

import io from "socket.io-client";
const withSocket = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {},
        fireRedirect: false
      };
      // this.state = {
      //   data: {
      //     description: {
      //       title: "Sample title",
      //       description: "This is a description"
      //     },
      //     engagementDescription: {
      //       up: "Faster",
      //       down: "Slower"
      //     },
      //     status: {
      //       isPaused: false,
      //       isStopped: false,
      //       time: "10:40"
      //     }
      //   },

      // };

      const {
        match: {
          params: { sessionId }
        }
      } = this.props;

      this.handleClick = this.handleClick.bind(this);
      this.sessionId = sessionId;
      this.socket = io(`http://10.126.4.146:7770`);
    }

    componentDidMount() {
      this.socket.on("connect", () => {
        this.socket.emit("joinSession", this.sessionId);
      });

      this.listenForEvents();
    }

    listenForEvents() {
      this.socket.on("updateClient", data => {
        console.log("updateClient", data);
        this.setState({
          data: data
        });
      });

      this.socket.on("welcomeMessage", data => {
        console.log("welcomeMessage", data);
        this.setState({
          presentation: data
        });
      });
    }

    handleVote = value =>
      this.socket.emit("attendeePayload", {
        session: this.sessionId,
        payload: {
          engagement: value
        }
      });

    handleClick = () => {
      this.setState({ fireRedirect: true });
    };

    render() {
      if (this.state.fireRedirect) {
        return <Redirect to={"/"} />;
      }
      return (
        <WrappedComponent
          handleVote={this.handleVote}
          handleClick={this.handleClick}
          data={this.state}
          {...this.props}
        />
      );
    }
  };
};

const Client = ({ data, handleVote, handleClick, styles }) => {
  console.log(data);
  return (
    <div {...css(styles.client)}>
      {/* <FlexContainer
        justify="center"
        align="center"
        style={{ height: "100vh" }}
      >
        {data.data.status.isStopped ? (
          <Modal withOverlay>
            <Heading size="2">The session has ended</Heading>
            <Paragraph>Thank you for participating</Paragraph>
            <Button onClick={handleClick} appearance="secondary">
              LEAVE SESSION
            </Button>
          </Modal>
        ) : (
          ""
        )}
        <FlexContainer>
          <Heading appearance="primary" size="2">
            {data.data.description.title}
          </Heading>
          <Heading appearance="primary" size="3">
            {data.data.description.description}
          </Heading>
          <Paragraph appearance="white">{data.data.status.time}</Paragraph>
          {data.data.status.isPaused ? (
            <Modal withOverlay>
              <Heading size="2">This session is currently paused</Heading>
              <Paragraph>Wait for the host to resume the session</Paragraph>
            </Modal>
          ) : (
            ""
          )}
          <FlexContainer align="start">
            <Paragraph appearance="success">
              {data.data.engagementDescription.up}
            </Paragraph>
            <VoteSlider handleVote={handleVote} />
            <Paragraph appearance="danger">
              {data.data.engagementDescription.down}
            </Paragraph>
          </FlexContainer>
        </FlexContainer>
        </FlexContainer> */}
    </div>
  );
};

const socket = withSocket(Client);

export default withStyles(({ themes, colors }) => {
  return {
    client: {
      backgroundColor: colors.nightsky
    }
  };
})(socket);
