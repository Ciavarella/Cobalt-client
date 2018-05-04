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
        isLoading: true,
        data: {
          // sessionId: sessionId,
          // presentation: {
          //   name: "Session name",
          //   description: "Session description"
          // },
          // settings: {
          //   threshold: 50,
          //   maxAttendees: 50,
          //   engagementDescription: "Engagement description"
          // },
          // status: {
          //   hasStarted: false,
          //   hasEnded: false,
          //   isPaused: false,
          //   time: 0
          // },
          // engagement: {
          //   average: 0,
          //   positive: 50,
          //   negative: 50
          // },
          // attendees: 0
        }
      };

      this.sessionId = sessionId;
      this.socket = io(process.env.REACT_APP_API_BASE_URL);
      this.startSession = this.startSession.bind(this);
      this.stopSession = this.stopSession.bind(this);
      this.pauseSession = this.pauseSession.bind(this);
      this.requestSave = this.requestSave.bind(this);
      this.switchData = this.switchData.bind(this);
      this.listenForEvents = this.listenForEvents.bind(this);
    }

    componentDidMount() {
      this.socket.on("connect", socket => {
        fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/session/${
            this.sessionId
          }/${this.socket.id}`,
          {
            credentials: "include"
          }
        )
          .then(res => res.json())
          .then(res => {
            if (res.success) {
              this.socket.emit("joinSession", this.sessionId);
            }

            this.listenForEvents();
          })
          .catch(err => {
            this.setState({
              isLoading: false
            });
            console.log("not the owner", err);
          });
      });
    }

    listenForEvents() {
      this.socket.on("updateHost", data => {
        console.log(data);
        this.setState({
          isLoading: false,
          data: data
        });
      });
    }

    updateSession() {
      console.log(this.state.data);
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
              hasEnded: true
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
        sessionId: this.state.data.sessionId,
        timeStamp: time,
        value: this.state.data.engagement
      });
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
      if (this.state.isLoading) return <h2>Checking your credz</h2>;

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
