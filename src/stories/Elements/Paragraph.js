import React from "react";

import { storiesOf } from "@storybook/react";

import Paragraph from "../../Elements/Paragraph";

storiesOf("Paragraph", module)
  .add("Leading", () => <Paragraph size="large">Leading paragraph</Paragraph>)
  .add("Normal", () => <Paragraph>Normal paragraph</Paragraph>)
  .add("Sub", () => <Paragraph size="small">Sub paragraph</Paragraph>);
