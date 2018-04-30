import React from "react";
import { storiesOf } from "@storybook/react";

import ButtonLink from "../../Elements/ButtonLink";

storiesOf("ButtonLink", module)
  .add("Primary", () => (
    <ButtonLink to="https://google.se" appearance="primary" size="xs">
      Primary
    </ButtonLink>
  ))
  .add("Primary (Gradient)", () => (
    <ButtonLink appearance="primaryGradient" size="xs">
      Primary Gradient
    </ButtonLink>
  ))
  .add("Secondary", () => (
    <ButtonLink
      appearance="secondary"
      size="xs"
      onClick={() => console.log("Secondary click")}
    >
      Secondary
    </ButtonLink>
  ))
  .add("Secondary (Gradient)", () => (
    <ButtonLink appearance="secondaryGradient" size="xs">
      Secondary Gradient
    </ButtonLink>
  ))
  .add("Success", () => (
    <ButtonLink
      appearance="success"
      size="xs"
      onClick={() => console.log("Success click")}
    >
      Success
    </ButtonLink>
  ))
  .add("Success (Gradient)", () => (
    <ButtonLink appearance="successGradient" size="xs">
      Success Gradient
    </ButtonLink>
  ))
  .add("Danger", () => (
    <ButtonLink
      appearance="danger"
      size="xs"
      onClick={() => console.log("Danger click")}
    >
      Danger
    </ButtonLink>
  ))
  .add("Danger (Gradient)", () => (
    <ButtonLink appearance="dangerGradient" size="xs">
      Danger Gradient
    </ButtonLink>
  ));
