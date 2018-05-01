import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
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
      this.socket = io(process.env.REACT_APP_API_BASE_URL);
    }

    componentDidMount() {
      this.socket.on("connect", () => {
        this.socket.emit("joinSession", this.sessionId);
      });

      this.listenForEvents();
    }

    listenForEvents() {
      this.socket.on("updateHost", data => {
        this.setState({
          data: data
        });
      });
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

    render() {
      return (
        <WrappedComponent
          pauseSession={this.pauseSession}
          stopSession={this.stopSession}
          updateSession={this.updateSession}
          data={this.state}
          {...this.props}
        />
      );
    }
  };
};

export default withSocket;

