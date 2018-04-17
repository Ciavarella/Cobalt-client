import React from "react";

import { storiesOf } from "@storybook/react";

import FlexContainer from "../../Containers/FlexContainer";
import Heading from "../../Elements/Heading";
import Paragraph from "../../Elements/Paragraph";
import Button from "../../Elements/Button";

storiesOf("FlexContainer", module)
  .add("Row", () => 
  	<FlexContainer direction="row">
  		<Heading size="2" appearance="default">Flex: Row</Heading>
  		<Paragraph size="2" appearance="primary">Paragraph to demonstrate row</Paragraph>
  		<Button appearance="primary">Yay, FlexContainer!</Button>
		</FlexContainer>)
  .add("Column (Left)", () => 
  	<FlexContainer direction="column" align="left">
  		<Heading size="2" appearance="default">Flex: Row</Heading>
  		<Paragraph size="2" appearance="primary">Paragraph to demonstrate row</Paragraph>
  		<Button appearance="primary">Yay, FlexContainer!</Button>
		</FlexContainer>)
  .add("Column (Right)", () => 
  	<FlexContainer direction="column" align="right">
  		<Heading size="2" appearance="default">Flex: Row</Heading>
  		<Paragraph size="2" appearance="primary">Paragraph to demonstrate row</Paragraph>
  		<Button appearance="primary">Yay, FlexContainer!</Button>
		</FlexContainer>)
  .add("Column (Center)", () => 
  	<FlexContainer direction="column">
  		<Heading size="2" appearance="default">Flex: Row</Heading>
  		<Paragraph size="2" appearance="primary">Paragraph to demonstrate row</Paragraph>
  		<Button appearance="primary">Yay, FlexContainer!</Button>
		</FlexContainer>);;
