import React from "react";
import { css, withStyles } from "../../withStyles";

import FlexContainer from "../../Containers/FlexContainer";
import Modal from "../Modal";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Button from "../../Elements/Button";
import Input from "../../Elements/Input";
import InputWithIcon from "../../Elements/InputWithIcon";
import Icon from "../../Elements/Icon";
import Checkbox from "../../Elements/Checkbox";

const Preferences = ({ styles }) => (
  <div {...css(styles.preferences)}>
    <FlexContainer>
      <Heading appearance="primary" size="2">
        Preferences
      </Heading>
      <Paragraph size="normal">
        Here you can set some preferred settings for your session. Don't worry,
        you can change them before starting!
      </Paragraph>

      <FlexContainer
        direction="row"
        justify="between"
        style={{ width: "450px" }}
      >
        <FlexContainer align="start">
          <Paragraph size="sub" style={{ marginBottom: "0px" }}>
            Max attendees
          </Paragraph>
          <InputWithIcon
            icon="fas fa-users"
            iconFillColor="white"
            iconBackground="nightsky"
            style={{ marginTop: "0px" }}
          />
        </FlexContainer>

        <FlexContainer align="start">
          <Paragraph size="sub" style={{ marginBottom: "0px" }}>
            Warning threshold
          </Paragraph>
          <InputWithIcon
            icon="fas fa-exclamation-triangle"
            iconFillColor="white"
            iconBackground="nightsky"
          />
        </FlexContainer>
      </FlexContainer>

      <FlexContainer
        direction="row"
        justify="between"
        style={{ width: "450px" }}
      >
        <FlexContainer align="start">
          <Paragraph size="sub">Engagement description</Paragraph>
          <Input
            placeholder="Ex. Are you able to follow..?"
            style={{ marginLeft: "0px", width: "200px" }}
          />
        </FlexContainer>

        <FlexContainer align="start">
          <Paragraph size="sub">Lobby message</Paragraph>
          <Input
            placeholder="Ex. Welcome to my lecture!"
            style={{ marginLeft: "0px", width: "200px" }}
          />
        </FlexContainer>
      </FlexContainer>

      <FlexContainer direction="row">
        <FlexContainer>
          <Checkbox />
          <Paragraph>Allow comments</Paragraph>
        </FlexContainer>
        <FlexContainer>
          <Checkbox />
          <Paragraph>Some other setting</Paragraph>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  </div>
);

export default withStyles(({}) => {
  return {
    preferences: {}
  };
})(Preferences);
