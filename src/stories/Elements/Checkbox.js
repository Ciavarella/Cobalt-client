import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import FlexContainer from "../../Containers/FlexContainer";
import Checkbox from "../../Elements/Checkbox";

storiesOf("Checkbox & Radiobutton", module)
  .add("Checkbox (primary)", () => (
    <FlexContainer align="start" justify="around" style={{ height: "200px" }}>
      <Checkbox name="checkbox" type="checkbox" />
      <Checkbox name="checkbox" type="checkbox" />
      <Checkbox name="checkbox" type="checkbox" />
    </FlexContainer>
  ))
  .add("Checkbox(secondary)", () => (
    <FlexContainer align="start" justify="around" style={{ height: "200px" }}>
      <Checkbox name="checkbox" appearance="secondary" type="checkbox" />
      <Checkbox name="checkbox" appearance="secondary" type="checkbox" />
      <Checkbox name="checkbox" appearance="secondary" type="checkbox" />
    </FlexContainer>
  ))
  .add("Checkbox(success)", () => (
    <FlexContainer align="start" justify="around" style={{ height: "200px" }}>
      <Checkbox name="checkbox" appearance="success" type="checkbox" />
      <Checkbox name="checkbox" appearance="success" type="checkbox" />
      <Checkbox name="checkbox" appearance="success" type="checkbox" />
    </FlexContainer>
  ))
  .add("Checkbox(danger)", () => (
    <FlexContainer align="start" justify="around" style={{ height: "200px" }}>
      <Checkbox name="checkbox" appearance="danger" type="checkbox" />
      <Checkbox name="checkbox" appearance="danger" type="checkbox" />
      <Checkbox name="checkbox" appearance="danger" type="checkbox" />
    </FlexContainer>
  ))
  .add("Radiobutton (primary)", () => (
    <FlexContainer align="start" justify="around" style={{ height: "200px" }}>
      <Checkbox name="radiobutton" type="radio" />
      <Checkbox name="radiobutton" type="radio" />
      <Checkbox name="radiobutton" type="radio" />
    </FlexContainer>
  ))
  .add("Radiobutton (secondary)", () => (
    <FlexContainer align="start" justify="around" style={{ height: "200px" }}>
      <Checkbox appearance="secondary" name="radiobutton" type="radio" />
      <Checkbox appearance="secondary" name="radiobutton" type="radio" />
      <Checkbox appearance="secondary" name="radiobutton" type="radio" />
    </FlexContainer>
  ))
  .add("Radiobutton (success)", () => (
    <FlexContainer align="start" justify="around" style={{ height: "200px" }}>
      <Checkbox appearance="success" name="radiobutton" type="radio" />
      <Checkbox appearance="success" name="radiobutton" type="radio" />
      <Checkbox appearance="success" name="radiobutton" type="radio" />
    </FlexContainer>
  ))
  .add("Radiobutton (danger)", () => (
    <FlexContainer align="start" justify="around" style={{ height: "200px" }}>
      <Checkbox appearance="danger" name="radiobutton" type="radio" />
      <Checkbox appearance="danger" name="radiobutton" type="radio" />
      <Checkbox appearance="danger" name="radiobutton" type="radio" />
    </FlexContainer>
  ));
