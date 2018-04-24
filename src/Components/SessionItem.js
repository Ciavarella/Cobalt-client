import React from "react";
import { css, withStyles } from "../withStyles";

import Card from "../Elements/Card";
import Button from "../Elements/Button";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import FlexContainer from "../Containers/FlexContainer";

const stripStringLength = string => string.slice(0, 80) + "...";

const SessionItem = ({
  date,
  attendees,
  title,
  description,
  styles,
  ...props
}) => {
  return (
    <div {...css(styles, styles.sessionItem)}>
      <FlexContainer
        direction="row"
        justify="center"
        style={{ flexWrap: "wrap" }}
      >
        <Card appearance="secondary" style={{ margin: "10px", width: "400px" }}>
          <FlexContainer
            direction="row"
            justify="around"
            align="start"
            style={{ marginBottom: "50px" }}
          >
            <Paragraph>{date}</Paragraph>
            <Paragraph>Attendees: {attendees}</Paragraph>
          </FlexContainer>
          <FlexContainer align="start">
            <Heading size="4">{title}</Heading>
            <Paragraph>{stripStringLength(description)}</Paragraph>
          </FlexContainer>
        </Card>
      </FlexContainer>
    </div>
  );
};

export default withStyles(({ themes, colors }) => {
  return {
    sessionItem: {
      ":nth-child(1) p": {
        width: "310px",
        height: "32px"
      }
    },

    primary: colors.primary,
    danger: colors.danger,
    success: colors.success
  };
})(SessionItem);
