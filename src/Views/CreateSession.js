import React from "react";
import { withStyles } from "../withStyles";
import { connect } from "react-redux";

import Wizard from "../Components/Wizard";
import Preferences from "../Components/CreateSession/Preferences";
import Name from "../Components/CreateSession/Name";
import Modal from "../Components/Modal";
import ButtonLink from "../Elements/ButtonLink";
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

  // TODO: Get real workspaces
  workspaces = ["Chas academy", "Ballerina", "KTH", "Hoppla"];

  handleSubmit(data) {
    let newObj = {};

    for (const [key, value] of data.entries()) {
      newObj[key] = value;
    }
    debugger;
    this.props.requestNewSession(newObj);
  }

  componentWillUnmount() {
    this.props.sessionCreated();
  }

  render() {
    const { isFetching, newSessionCreated, session } = this.props;

    return newSessionCreated ? (
      <Modal withOverlay>
        <SessionStarted sessionId={session.sessionId} />
        <ButtonLink to={"/host/" + session.sessionId} appearance="secondary">
          GO TO PRESENTATION LOBBY
        </ButtonLink>
      </Modal>
    ) : (
      <Wizard handleSubmit={this.handleSubmit} isLoading={isFetching}>
        <Name workspace={this.workspaces} />
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
