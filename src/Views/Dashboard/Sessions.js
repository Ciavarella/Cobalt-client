import React from "react";
import { css, withStyles } from "../../withStyles";
import FlexContainer from "../../Containers/FlexContainer";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Button from "../../Elements/Button";
import SessionItem from "../../Components/SessionItem";

import openBoxIcon from "../../assets/open-box.svg";

const Sessions = ({ styles, ...props }) => {
  let sessions = ["1"];
  if (sessions.length < 1) {
    return (
      <div {...css(styles.empty)}>
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
        <SessionItem description="This is a much longer longer description but it should only be two rows and not more than that" />
        <SessionItem />
        <SessionItem />
        <SessionItem />
        <SessionItem />
        <SessionItem />
        <SessionItem />
      </FlexContainer>
    </div>
  );
};

export default withStyles(({ colors }) => {
  return {
    empty: {
      height: "100%",
      display: "flex",
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
