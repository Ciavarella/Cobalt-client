import React from "react";
import { css, withStyles } from "../withStyles";
import { connect } from "react-redux";

import Wizard from "../Components/Wizard";
import Preferences from "../Components/CreateSession/Preferences";
import Name from "../Components/CreateSession/Name";
import Modal from "../Components/Modal";
import Button from "../Elements/Button";
import { requestNewSession } from "../redux/session/actions";

import SessionStarted from "../Components/CreateSession/SessionStarted";

const mapDispatchToProps = dispatch => {
  return {
    requestNewSession: data => dispatch(requestNewSession(data))
  };
};

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
    this.props.requestNewSession(data);
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

CreateSession = connect(null, mapDispatchToProps)(CreateSession);

export default withStyles(({ colors }) => {
  return {
    createSession: {}
  };
})(CreateSession);
