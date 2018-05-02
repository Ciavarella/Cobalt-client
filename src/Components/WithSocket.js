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
      this.requestSave = this.requestSave.bind(this);
      this.switchData = this.switchData.bind(this);
    }

    componentDidMount() {
      this.socket.on("connect", () => {
        this.socket.emit("joinSession", this.sessionId);
      });

      this.listenForEvents();
    }

    listenForEvents() {
      this.socket.on("updateHost", data => {
        console.log("Data from Socket: ", data);
        this.setState({
          data: data
        });
      });
    }

    updateSession() {
      this.socket.emit("presenterPayload", {
        session: this.sessionId,
        payload: this.state.data
      });
    }

    startSession() {
      this.setState(
        {
          data: {
            ...this.state.data,
            status: {
              ...this.state.data.status,
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
            status: {
              ...this.state.data.status,
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
            status: {
              ...this.state.data.status,
              isPaused: !this.state.data.status.isPaused
            }
          }
        },
        this.updateSession
      );
    }

    getPercentageFromAvg(avg) {
      return Math.round((avg + 5) / 10 * 100);
    }

    requestSave(time) {
      this.socket.emit("presenterRequestsSave", {
        sessionId: this.state.sessionId,
        timeStamp: time,
        value: this.state.data.engagement
      });
      console.log("timestamp: ", time);
    }

    switchData() {
      this.setState(
        {
          data: {
            ...this.state.data,
            status: {
              ...this.state.data.status,
              isAverage: !this.state.data.status.isAverage
            }
          }
        },
        this.updateSession
      );
    }

    render() {
      return (
        <WrappedComponent
          startSession={this.startSession}
          stopSession={this.stopSession}
          pauseSession={this.pauseSession}
          updateSession={this.updateSession}
          getPercentageFromAvg={this.getPercentageFromAvg}
          switchData={this.switchData}
          requestSave={this.requestSave}
          {...this.state}
          {...this.props}
        />
      );
    }
  };
};

export default withSocket;
