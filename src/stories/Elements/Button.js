import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../../Elements/Button";

storiesOf("Button", module)
  .add("Default", () => <Button size="xs" >Default</Button>)
  .add("Primary", () => <Button appearance="primary" size="xs" >Primary</Button>)
  .add("Secondary", () => (
    <Button appearance="secondary"  size="xs" onClick={() => console.log("secondary click")}>
      Secondary
    </Button>
  ))
  .add("Success", () => (
    <Button appearance="success"  size="xs" onClick={() => console.log("success click")}>
      Success
    </Button>
  ))
  .add("Danger", () => (
    <Button appearance="danger"  size="xs" onClick={() => console.log("secondary click")}>
      Danger
    </Button>
  ));