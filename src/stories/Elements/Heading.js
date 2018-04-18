import React from "react";
import { storiesOf } from "@storybook/react";

import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import FlexContainer from "../../Containers/FlexContainer";

storiesOf("Heading", module)
  .add("h1", () => <Heading size="1">Montserrat 38</Heading>)
  .add("h2", () => <Heading size="2">Montserrat 24</Heading>)
  .add("h3", () => <Heading size="3">Montserrat 18</Heading>)
  .add("h4", () => <Heading size="4">Montserrat 16</Heading>)
  .add("h5", () => <Heading size="5">Montserrat 14</Heading>)
  .add("h1 (With paragraph)", () => (
    <FlexContainer align="start">
      <Heading size="1">Montserrat 38</Heading>
      <Paragraph>This is how a paragraph looks after a heading</Paragraph>
    </FlexContainer>
  ))
  .add("h2 (With paragraph)", () => (
    <FlexContainer align="start">
      <Heading size="2">Montserrat 24</Heading>
      <Paragraph>This is how a paragraph looks after a heading</Paragraph>
    </FlexContainer>
  ))
  .add("h3 (With paragraph)", () => (
    <FlexContainer align="start">
      <Heading size="3">Montserrat 18</Heading>
      <Paragraph>This is how a paragraph looks after a heading</Paragraph>
    </FlexContainer>
  ))
  .add("h4 (With paragraph)", () => (
    <FlexContainer align="start">
      <Heading size="4">Montserrat 16</Heading>
      <Paragraph>This is how a paragraph looks after a heading</Paragraph>
    </FlexContainer>
  ))
  .add("h5 (With paragraph)", () => (
    <FlexContainer align="start">
      <Heading size="5">Montserrat 14</Heading>
      <Paragraph>This is how a paragraph looks after a heading</Paragraph>
    </FlexContainer>
  ));
