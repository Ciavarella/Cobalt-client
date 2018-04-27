import React from "react";
import { css, withStyles } from "../withStyles";

import Wizard from "../Components/Wizard";
import Preferences from "../Components/CreateSession/Preferences";
import Name from "../Components/CreateSession/Name";
import Modal from "../Components/Modal";
import Button from "../Elements/Button";

import SessionStarted from "../Components/CreateSession/SessionStarted";

class CreateSession extends React.Component {
  constructor({ styles, handleSubmit = null, ...props }) {
    super(props);
    this.state = {
      isFetching: false,
      sessionId: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.setState({
      isFetching: true
    });

    fetch(`${process.env.REACT_APP_API_BASE_URL}/session`, {
      method: "POST",
      body: data
    })
      .then(res => res.json())
      .then(session => {
        this.setState({
          isFetching: false,
          sessionId: session.session
        });
      });
  }

  render() {
    return this.state.sessionId ? (
      <Modal withOverlay>
        <SessionStarted sessionId={this.state.sessionId} />
        <Button appearance="secondary">END</Button>
      </Modal>
    ) : (
      <Wizard
        handleSubmit={this.handleSubmit}
        isLoading={this.state.isFetching}
      >
        <Name />
        <Preferences />
      </Wizard>
    );
  }
}

export default withStyles(({ colors }) => {
  return {
    createSession: {}
  };
})(CreateSession);
