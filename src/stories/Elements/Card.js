import React from "react";
import { storiesOf } from "@storybook/react";

import Card from "../../Elements/Card";

storiesOf("Card", module)
  .add("Default", () => (
    <Card>
      <p>test</p>
    </Card>
  ))
  .add("Primary (shadow)", () => (
    <Card appearance="primary" shadow="shadow">
      <p>test</p>
    </Card>
  ))
  .add("Secondary (shadow)", () => (
    <Card appearance="secondary" shadow="shadow">
      <p>test</p>
    </Card>
  ));
