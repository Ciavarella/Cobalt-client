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

      this.state = {
        data: {
          status: {
            hasStarted: false
          }
        },
        fireRedirect: false,
        windowSize: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      };

      const {
        match: {
          params: { sessionId }
        }
      } = this.props;

      this.handleClick = this.handleClick.bind(this);
      this.preventBounce = this.preventBounce.bind(this);

      this.sessionId = sessionId;
      this.socket = io(`http://10.126.4.146:7770`);
    }

    componentWillMount() {
      this.updateWindowSize();
      this.updateWindowSize = this.updateWindowSize.bind(this);
    }

    componentDidMount() {
      this.socket.on("connect", () => {
        this.socket.emit("joinSession", this.sessionId);
      });

      //  Bounces
      // NOTE: This will break any other type of scrolling for touch devices if not configured properly
      // TODO: Check client type (navigator.userAgent somehow, if mobile and IOS safari -> do this)
      window.addEventListener("touchmove", this.preventBounce);

      window.addEventListener("resize", this.updateWindowSize);

      this.listenForEvents();
    }

    preventBounce(event) {
      event.preventDefault();
      event.stopPropagation();
    }

    updateWindowSize() {
      this.setState({
        ...this.state,
        windowSize: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      });
    }

    listenForEvents() {
      this.socket.on("updateClient", data => {
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
          windowSize={this.state.windowSize}
          {...this.props}
        />
      );
    }
  };
};

const Client = ({
  data,
  handleVote,
  handleClick,
  windowSize,
  styles,
  ...props
}) => {
  console.log(data);
  return (
    <div
      {...css(styles.client)}
      style={{
        height: windowSize.width < 420 ? "0px" : "100%",
        position: windowSize.width < 420 ? "fixed" : ""
      }}
    >
      {data.status.hasStarted ? (
        <FlexContainer
          justify="center"
          align="center"
          style={{ height: windowSize.width < 420 ? "" : "100vh" }}
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
            {windowSize.width > 420 ? (
              <div>
                <Heading appearance="primary" size="2">
                  {data.presentation.name}
                </Heading>
                <Heading appearance="primary" size="3">
                  {data.presentation.description}
                </Heading>
                <Paragraph appearance="white">{data.status.time}</Paragraph>
              </div>
            ) : (
              ""
            )}
            {data.status.isPaused ? (
              <Modal withOverlay>
                <Heading size="2">This session is currently paused</Heading>
                <Paragraph>Wait for the host to resume the session</Paragraph>
              </Modal>
            ) : (
              ""
            )}
            <FlexContainer align="start" style={{ position: "relative" }}>
              <Paragraph
                appearance="danger"
                style={{
                  position: "absolute",
                  zIndex: "10",
                  top: "5px",
                  right: "10px"
                }}
              >
                {data.engagementDescription.up}
              </Paragraph>
              <VoteSlider handleVote={handleVote} />
              <Paragraph
                appearance="success"
                style={{
                  marginTop: "12px",
                  marginBottom: "0px",
                  position: "absolute",
                  zIndex: "10",
                  bottom: "5px",
                  right: "10px"
                }}
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
      backgroundColor: colors.nightsky,
      touchAction: "none"
    },
    spinner: {
      ":nth-child(1n) span": {
        fontSize: "70px"
      }
    }
  };
})(ClientWithSocket);
