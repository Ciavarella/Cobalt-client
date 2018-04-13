import React from "react";
import { storiesOf } from "@storybook/react";

import Heading from "../../Elements/Heading";

storiesOf("Heading", module)
  .add("h1", () => <Heading type="h1">h1 Heading</Heading>)
  .add("h2", () => (
    <Heading type="h2" color="primary">
      h2 Heading
    </Heading>
  ))
  .add("h3", () => (
    <Heading type="h3" color="secondary">
      h3 Heading
    </Heading>
  ))
  .add("h4", () => <Heading type="h4">h4 Heading</Heading>)
  .add("h5", () => <Heading type="h5">h5 Heading</Heading>)
  .add("h6", () => <Heading type="h6">h6 Heading</Heading>);
