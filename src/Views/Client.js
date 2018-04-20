import React from "react";

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
        this.socket.emit("session", this.sessionId);
      });

      this.listenForEvents();
    }

    listenForEvents() {
      this.socket.on("message", data => {
        console.log(data);
        this.setState({
          data: data
        });
      });
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};

const Client = ({ data }) => {
  return (
    <React.Fragment>
      <h1>Client View</h1>
      <p>{JSON.stringify(data)}</p>
    </React.Fragment>
  );
};

export default withSocket(Client);
