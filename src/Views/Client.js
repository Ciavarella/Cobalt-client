import React from "react";

import Button from "../Elements/Button";
import FlexContainer from "../Containers/FlexContainer";

import io from "socket.io-client";

const withSocket = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {}
      };

      const {
        match: {
          params: { sessionId }
        }
      } = this.props;

      this.sessionId = sessionId;
      this.socket = io(`${process.env.REACT_APP_API_BASE_URL}`);
    }

    componentDidMount() {
      this.socket.on("connect", () => {
        this.socket.emit("joinSession", this.sessionId);
      });

      this.listenForEvents();
    }

    listenForEvents() {
      this.socket.on("sessionUpdated", data => {
        this.setState({
          data: data
        });
      });

      this.socket.emit("attendeePayload", {
        session: this.sessionId,
        payload: {
          engagement: "Some Payload"
        }
      });
    }

    handleVote = value => event =>
      this.socket.emit("attendeePayload", {
        session: this.sessionId,
        payload: {
          engagement: value
        }
      });

    render() {
      return (
        <WrappedComponent
          handleVote={this.handleVote}
          data={this.state.data}
          {...this.props}
        />
      );
    }
  };
};

const Client = ({ data, handleVote }) => {
  return (
    <React.Fragment>
      <h1>Client View</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <FlexContainer justify="center" align="center">
        <Button onClick={handleVote(10)}>Faster</Button>
        <Button onClick={handleVote(1)}>Slower</Button>
      </FlexContainer>
    </React.Fragment>
  );
};

export default withSocket(Client);
