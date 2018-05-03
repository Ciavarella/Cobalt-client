import React from "react";
import { css, withStyles } from "../withStyles";

import Card from "../Elements/Card";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import FlexContainer from "../Containers/FlexContainer";

const stripStringLength = string => string.slice(0, 80) + "...";

const SessionItem = ({
  date = "June 12, 2018",
  attendees = "233",
  title = "Session title",
  description = "This is the default description",
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
        <Card style={{ margin: "12px 12px 0px 0px", width: "400px" }}>
          <FlexContainer
            direction="row"
            justify="between"
            align="start"
            style={{ marginBottom: "50px" }}
          >
            <Paragraph size="sub">{date}</Paragraph>
            <Paragraph size="sub">Attendees: {attendees}</Paragraph>
          </FlexContainer>
          <FlexContainer align="start">
            <Heading size="3" appearance="white">
              {title}
            </Heading>
            <Paragraph style={{ height: "32px" }}>
              {stripStringLength(description)}
            </Paragraph>
          </FlexContainer>
        </Card>
      </FlexContainer>
    </div>
  );
};

export default withStyles(({ themes, colors }) => {
  return {
    sessionItem: {
      cursor: "pointer",
      transition: "all 0.3s ease",
      ":hover": {
        transform: "translateY(-8px)"
      }
    },

    primary: colors.primary,
    danger: colors.danger,
    success: colors.success
  };
})(SessionItem);
