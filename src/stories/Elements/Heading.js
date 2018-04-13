import React from "react";
import { storiesOf } from "@storybook/react";

import Heading from "../../Elements/Heading";

storiesOf("Heading", module)
  .add("h1", () => <Heading size="1">h1 Heading</Heading>)
  .add("h2", () => (
    <Heading size="2" color="primary">
      h2 Heading
    </Heading>
  ))
  .add("h3", () => (
    <Heading size="3" color="secondary">
      h3 Heading
    </Heading>
  ))
  .add("h4", () => <Heading size="4">h4 Heading</Heading>)
  .add("h5", () => <Heading size="5">h5 Heading</Heading>)
  .add("h6", () => <Heading size="6">h6 Heading</Heading>);
