import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import io from "socket.io-client";

const withSocket = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      const {
        match: {
          params: { sessionId }
        }
      } = this.props;

      this.state = {
        sessionId: sessionId,
        data: {
          time: 0,
          attendees: 814,
          description: {
            title: "Default title",
            description: "Default description"
          },
          engagement: {
            average: 0,
            negative: 50,
            positive: 50
          },
          status: {
            isAverage: false,
            hasStarted: false,
            isPaused: false,
            isStopped: false,
            maxAttendees: 50,
            threshold: 50
          }
        }
      };

      this.sessionId = sessionId;
      this.socket = io(`http://10.126.4.146:7770`);
      this.startSession = this.startSession.bind(this);
      this.stopSession = this.stopSession.bind(this);
      this.pauseSession = this.pauseSession.bind(this);
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
        payload: this.state.data.presentation
      });
    }

    startSession() {
      this.setState(
        {
          data: {
            ...this.state.data,
            presentation: {
              ...this.state.data.presentation,
              hasStarted: true
            }
          }
        },
        this.updateSession
      );
    }

    stopSession() {
      this.setState(
        {
          data: {
            ...this.state.data,
            presentation: {
              ...this.state.data.presentation,
              isStopped: true
            }
          }
        },
        this.updateSession
      );
    }

    pauseSession() {
      this.setState(
        {
          data: {
            ...this.state.data,
            presentation: {
              ...this.state.data.presentation,
              isPaused: !this.state.data.presentation.isPaused
            }
          }
        },
        this.updateSession
      );
    }

    getPercentageFromAvg(avg) {
      return Math.round((avg + 5) / 10 * 100);
    }

    render() {
      return (
        <WrappedComponent
          startSession={this.startSession}
          stopSession={this.stopSession}
          pauseSession={this.pauseSession}
          updateSession={this.updateSession}
          getPercentageFromAvg={this.getPercentageFromAvg}
          {...this.state}
          {...this.props}
        />
      );
    }
  };
};

export default withSocket;
