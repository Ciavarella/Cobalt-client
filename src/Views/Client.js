import React from "react";
import { Redirect } from "react-router-dom";
import { css, withStyles } from "../withStyles";

import Button from "../Elements/Button";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import Loader from "../Elements/Loader";
import FlexContainer from "../Containers/FlexContainer";
import VoteSlider from "../Components/VoteSlider";
import Modal from "../Components/Modal";

import io from "socket.io-client";
const withSocket = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      // this.state = {
      //   data: {
      //     status: {
      //       hasStarted: false
      //     }
      //   },
      //   fireRedirect: false
      // };
      this.state = {
        data: {
          presentation: {
            name: "Example name",
            description: "Example description"
          },
          engagementDescription: {
            up: "faster",
            down: "slower"
          },
          status: {
            hasStarted: true
          }
        },
        fireRedirect: false
      };

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
          data={this.state.data}
          {...this.props}
        />
      );
    }
  };
};

const Client = ({ data, handleVote, handleClick, styles, ...props }) => {
  console.log(data);
  return (
    <div {...css(styles.client)}>
      {data.status.hasStarted ? (
        <FlexContainer
          justify="center"
          align="center"
          style={{ height: "100vh" }}
        >
          {data.status.hasEnded ? (
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
              {data.presentation.name}
            </Heading>
            <Heading appearance="primary" size="3">
              {data.presentation.description}
            </Heading>
            <Paragraph appearance="white">{data.status.time}</Paragraph>
            {data.status.isPaused ? (
              <Modal withOverlay>
                <Heading size="2">This session is currently paused</Heading>
                <Paragraph>Wait for the host to resume the session</Paragraph>
              </Modal>
            ) : (
              ""
            )}
            <FlexContainer align="start">
              <Paragraph appearance="success">
                {data.engagementDescription.up}
              </Paragraph>
              <VoteSlider handleVote={handleVote} />
              <Paragraph
                appearance="danger"
                style={{ marginTop: "12px", marginBottom: "0px" }}
              >
                {data.engagementDescription.down}
              </Paragraph>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column"
          }}
        >
          <Heading size="2" appearance="white" style={{ textAlign: "center" }}>
            Waiting for host to start session
          </Heading>
          <div {...css(styles.spinner)}>
            <Loader />
          </div>
        </div>
      )}
    </div>
  );
};

const ClientWithSocket = withSocket(Client);

export default withStyles(({ themes, colors }) => {
  return {
    client: {
      backgroundColor: colors.nightsky
    },
    spinner: {
      ":nth-child(1n) span": {
        fontSize: "70px"
      }
    }
  };
})(ClientWithSocket);
