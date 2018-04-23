import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../../Elements/Button";

storiesOf("Button", module)
  .add("Primary", () => (
    <Button appearance="primary" size="xs">
      Primary
    </Button>
  ))
  .add("Primary (Gradient)", () => (
    <Button appearance="primaryGradient" size="xs">
      Primary Gradient
    </Button>
  ))
  .add("Secondary", () => (
    <Button
      appearance="secondary"
      size="xs"
      onClick={() => console.log("Secondary click")}
    >
      Secondary
    </Button>
  ))
  .add("Secondary (Gradient)", () => (
    <Button appearance="secondaryGradient" size="xs">
      Secondary Gradient
    </Button>
  ))
  .add("Success", () => (
    <Button
      appearance="success"
      size="xs"
      onClick={() => console.log("Success click")}
    >
      Success
    </Button>
  ))
  .add("Success (Gradient)", () => (
    <Button appearance="successGradient" size="xs">
      Success Gradient
    </Button>
  ))
  .add("Danger", () => (
    <Button
      appearance="danger"
      size="xs"
      onClick={() => console.log("Danger click")}
    >
      Danger
    </Button>
  ))
  .add("Danger (Gradient)", () => (
    <Button appearance="dangerGradient" size="xs">
      Danger Gradient
    </Button>
  ));
