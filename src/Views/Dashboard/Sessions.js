import React from "react";
import { css, withStyles } from "../../withStyles";
import FlexContainer from "../../Containers/FlexContainer";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Button from "../../Elements/Button";
import Loader from "../../Elements/Loader";
import SessionItem from "../../Components/SessionItem";

import openBoxIcon from "../../assets/open-box.svg";

const Sessions = ({ styles, ...props }) => {
  /* TODO: MAJOR REFACTOR - VERY TEMPORARY */
  if (!props.data.workspaces) {
    return (
      <div {...css(styles.centered)}>
        <Loader fillColor="dawn" size="large" />
      </div>
    );
  }

  let sessions = props.data.workspaces[0].presentations;

  if (sessions.length <= 0) {
    return (
      <div {...css(styles.centered)}>
        <FlexContainer justify="center" align="center">
          <img {...css(styles.icon)} src={openBoxIcon} alt="Empty Box" />
          <Heading size="2">You don't have any sessions saved</Heading>
          <Paragraph>
            Why don't you get started right now? Let's host your ﬁrst session!
          </Paragraph>
          <Button appearance="primaryGradient">Host your first session!</Button>
        </FlexContainer>
      </div>
    );
  }

  return (
    <div {...css(styles.sessions)}>
      <FlexContainer
        align="start"
        justify="start"
        direction="row"
        style={{ flexWrap: "wrap" }}
      >
        {sessions.map((session, i) => {
          if (i > 5) return;
          return <SessionItem data={session} />;
        })}
      </FlexContainer>
    </div>
  );
};

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
      margin: "0px 12px"
    },
    icon: {
      width: "128px",
      marginBottom: "48px"
    }
  };
})(Sessions);
