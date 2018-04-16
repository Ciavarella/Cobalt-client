import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../../Elements/Button";

storiesOf("Button", module)
  .add("Default", () => <Button size="xs" >Default</Button>)
  .add("Primary", () => <Button color="primary" size="xs" >Primary</Button>)
  .add("Secondary", () => (
    <Button color="secondary"  size="xs" onClick={() => console.log("secondary click")}>
      Secondary
    </Button>
  ))
  .add("Success", () => (
    <Button color="success"  size="xs" onClick={() => console.log("success click")}>
      Success
    </Button>
  ))
  .add("Danger", () => (
    <Button color="danger"  size="xs" onClick={() => console.log("secondary click")}>
      Danger
    </Button>
  ));