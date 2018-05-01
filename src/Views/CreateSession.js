import React from "react";
import { css, withStyles } from "../withStyles";
import { connect } from "react-redux";

import Wizard from "../Components/Wizard";
import Preferences from "../Components/CreateSession/Preferences";
import Name from "../Components/CreateSession/Name";
import Modal from "../Components/Modal";
import Button from "../Elements/Button";
import { requestNewSession, sessionCreated } from "../redux/session/actions";

import SessionStarted from "../Components/CreateSession/SessionStarted";

const mapDispatchToProps = dispatch => {
  return {
    requestNewSession: data => dispatch(requestNewSession(data)),
    sessionCreated: () => dispatch(sessionCreated())
  };
};

const mapStateToProps = ({
  session: { isFetching, newSessionCreated, session, message }
}) => ({
  isFetching,
  newSessionCreated,
  session,
  message
});

class CreateSession extends React.Component {
  constructor({ styles, handleSubmit = null, ...props }) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.props.requestNewSession(data);
  }

  componentWillUnmount() {
    this.props.sessionCreated();
  }

  render() {
    const { isFetching, newSessionCreated, session } = this.props;

    return newSessionCreated ? (
      <Modal withOverlay>
        <SessionStarted sessionId={session} />
        <Button appearance="secondary">END</Button>
      </Modal>
    ) : (
      <Wizard handleSubmit={this.handleSubmit} isLoading={isFetching}>
        <Name />
        <Preferences />
      </Wizard>
    );
  }
}

CreateSession = connect(mapStateToProps, mapDispatchToProps)(CreateSession);

export default withStyles(({ colors }) => {
  return {
    createSession: {}
  };
})(CreateSession);
