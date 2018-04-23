import React from "react";
import { css, withStyles } from "../../withStyles";
import FlexContainer from "../../Containers/FlexContainer";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Button from "../../Elements/Button";

import openBoxIcon from "../../assets/open-box.svg";

const Sessions = ({ styles, ...props }) => {
  return (
    <div {...css(styles.sessions)}>
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
};

export default withStyles(({ colors }) => {
  return {
    sessions: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    icon: {
      width: "128px",
      marginBottom: "48px"
    }
  };
})(Sessions);
