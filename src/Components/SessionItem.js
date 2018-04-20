import React, { Component } from "react";
import { css, withStyles } from "../withStyles";

import Card from "../Elements/Card";
import Button from "../Elements/Button";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import FlexContainer from "../Containers/FlexContainer";

class SessionItem extends React.Component {
  constructor({ styles, ...props }) {
    super(props);
    this.state = {};

    // maybe bind this here when function is ready to be build.
  }

  // Function here

  render() {
    return (
      <div>
        <FlexContainer>
          <Heading>Your Sessions</Heading>
          <FlexContainer
            direction="row"
            justify="center"
            style={{ flexWrap: "wrap" }}
          >
            {/** THIS IS JUST FOR SOME SPACING! **/}
            <Card
              appearance="secondary"
              style={{ margin: "10px", width: "400px" }}
            >
              <FlexContainer
                direction="row"
                justify="between"
                align="start"
                style={{ marginBottom: "50px" }}
              >
                <Paragraph>20 April, 2018</Paragraph>
                <Paragraph>233 Attendees</Paragraph>
              </FlexContainer>
              <FlexContainer align="start">
                <Heading size="4">Awsome session title</Heading>
                <Paragraph
                  style={{
                    width: "310px",
                    height: "32px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitLineClamp: "2",
                    webkitBoxOrient: "vertical"
                  }}
                >
                  Description here!
                </Paragraph>
              </FlexContainer>
            </Card>

            {/** THIS IS JUST FOR SOM SPACING! **/}
            <Card
              appearance="primary"
              style={{ margin: "10px", width: "400px" }}
            >
              <FlexContainer
                direction="row"
                justify="between"
                align="start"
                style={{ marginBottom: "50px" }}
              >
                <Paragraph>20 April, 2018</Paragraph>
                <Paragraph>233 Attendees</Paragraph>
              </FlexContainer>
              <FlexContainer align="start">
                <Heading size="4">Long session title</Heading>
                <Paragraph
                  style={{
                    width: "310px",
                    height: "32px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    webkitLineClamp: "2",
                    webkitBoxOrient: "vertical"
                  }}
                >
                  WARNING! This is a much longer text than the other but it will
                  still limit the rows to two rows! And add some dots beacuse it
                  does not matter how long the text are here we are till fixing
                  it to be two rows, not more than that!
                </Paragraph>
              </FlexContainer>
            </Card>

            {/** THIS IS JUST FOR SOM SPACING! **/}
            <Card
              appearance="primary"
              style={{ margin: "10px", width: "400px", height: "217px" }}
            >
              <FlexContainer style={{ height: "100%" }} justify="center">
                <Heading size="4">Host a new session!</Heading>
                <Button appearance="secondary">Start New</Button>
              </FlexContainer>
            </Card>
          </FlexContainer>
        </FlexContainer>
      </div>
    );
  }
}

export default withStyles(({ themes, colors }) => {
  return {
    sessionItem: {},

    primary: colors.primary,
    danger: colors.danger,
    success: colors.success
  };
})(SessionItem);
