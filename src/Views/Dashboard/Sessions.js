import React from "react";
import { css, withStyles } from "../../withStyles";
import FlexContainer from "../../Containers/FlexContainer";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Button from "../../Elements/Button";
import ButtonLink from "../../Elements/ButtonLink";
import Loader from "../../Elements/Loader";
import Modal from "../../Components/Modal";
import SessionItem from "../../Components/SessionItem";
import openBoxIcon from "../../assets/open-box.svg";

class Sessions extends React.Component {
  constructor({ styles, ...props }) {
    super(props);
    this.state = {
      showModal: false,
      sessionId: null
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(session) {
    this.setState({
      showModal: !this.state.showModal,
      session: session
    });
  }

  renderSessions(data) {
    return data.map(workspace => {
      return workspace.presentations.map((session, key) => {
        if (session.hasEnded) {
          return (
            <SessionItem
              toggleModal={() => {
                this.toggleModal(session);
              }}
              key={key}
              data={session}
              workspace={workspace.name}
            />
          );
        }
      });
    });
  }

  render() {
    const { styles } = this.props;

    if (this.props.data.isFetching) {
      return (
        <div {...css(styles.centered)}>
          <Loader fillColor="dawn" size="large" />
        </div>
      );
    }

    if (!this.props.data.user.workspaces) {
      return (
        <div {...css(styles.centered)}>
          <FlexContainer justify="center" align="center">
            <img {...css(styles.icon)} src={openBoxIcon} alt="Empty Box" />
            <Heading size="2">You don't have any sessions saved</Heading>
            <Paragraph>
              Why don't you get started right now? Let's host your ﬁrst session!
            </Paragraph>
            <ButtonLink to={`/dashboard/new`} appearance="primaryGradient">
              Host your first session!
            </ButtonLink>
          </FlexContainer>
        </div>
      );
    }

    return (
      <div {...css(styles.sessions)}>
        {this.state.showModal ? (
          <Modal withAnimation withOverlay>
            <Heading size="3" appearance="white">
              {this.state.session.name}
            </Heading>
            <Paragraph appearance="white">What do you want to do?</Paragraph>
            <FlexContainer direction="row">
              <ButtonLink
                to={`/host/${this.state.session.sessionId}`}
                appearance="success"
                onClick={this.toggleModal}
              >
                Go to lobby
              </ButtonLink>
              <Button appearance="danger" onClick={this.toggleModal}>
                Delete
              </Button>
            </FlexContainer>
          </Modal>
        ) : (
          " "
        )}
        <Heading size="3">In progress</Heading>

        <FlexContainer
          align="start"
          justify="start"
          direction="row"
          style={{ flexWrap: "wrap" }}
        >
          {this.renderSessions(this.props.data.user.workspaces)}
        </FlexContainer>
      </div>
    );
  }
}

export default withStyles(({ colors }) => {
  return {
    centered: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    sessions: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "12px 0px",
      margin: "0px 12px"
    },
    icon: {
      width: "128px",
      marginBottom: "48px"
    }
  };
})(Sessions);
