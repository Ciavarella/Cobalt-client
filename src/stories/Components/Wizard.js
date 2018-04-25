import React from "react";

import { storiesOf } from "@storybook/react";

import Name from "../../Components/CreateSession/Name";
import Preferences from "../../Components/CreateSession/Preferences";
import SessionStarted from "../../Components/CreateSession/SessionStarted";

import Wizard from "../../Components/Wizard";

import SessionWizard from "../../Components/SessionWizard";

storiesOf("Wizard", module)
  .add("Basic usage", () => (
    <Wizard
      style={{ color: "white" }}
      callbackComponent={<SessionStarted sessionId="2fs83" />}
    >
      <div>Step One</div>
      <div>Step Two</div>
      <div>Step Three</div>
    </Wizard>
  ))
  .add("Session wizard", () => (
    <Wizard>
      <Name />
      <Preferences />
      <SessionStarted />
    </Wizard>
  ));

/*
  class CreateSession extends React.Component {

    handleSubmit(data) {
      this.props.dipatch(createSession(data))
    }

    render() {
      const { isFetching, sessionId } = this.props;

      <Wizard 
        onSubmit={<Redirect to="/something" />}
      />
        <One />
        <Two />
        <Three />
      </Wizard>
    }
  }

  const mapStateToProps = ({ session }) => ({
    isFetching: session.isFetching,
    sessionId: session.sessionId
  })
  */
