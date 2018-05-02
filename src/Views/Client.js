import React from "react";

import Button from "../Elements/Button";
import FlexContainer from "../Containers/FlexContainer";
import VoteSlider from "../Components/VoteSlider";

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
        this.setState({
          data: data
        });
      });

      this.socket.on("welcomeMessage", data => {
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

    render() {
      return (
        <WrappedComponent
          handleVote={this.handleVote}
          data={this.state}
          {...this.props}
        />
      );
    }
  };
};

const Client = ({ data, handleVote }) => {
  return (
    <React.Fragment>
      <FlexContainer direction="row" justify="center" align="center">
        <h1>Client View</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <VoteSlider handleVote={handleVote} />
      </FlexContainer>
    </React.Fragment>
  );
};

export default withSocket(Client);
