import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import InputWithIcon from "../../Elements/InputWithIcon";

storiesOf("Input with icon", module)
  .add("Default (Left side)", () => (
    <InputWithIcon
      icon="fas fa-users"
      iconFillColor="primary"
      iconBackground="carbon"
      type="text"
      placeholder="Default (Left side)"
    />
  ))
  .add("Right side", () => (
    <InputWithIcon
      icon="fas fa-users"
      iconPosition="right"
      iconBackground="nightsky"
      type="text"
      placeholder="Right side"
    />
  ))
  .add("Primay color", () => (
    <InputWithIcon
      icon="fas fa-users"
      appearance="primary"
      iconAppearance="primary"
      iconBackground="nightsky"
      type="text"
      placeholder="Primary color"
    />
  ))
  .add("Secondary color", () => (
    <InputWithIcon
      icon="fas fa-users"
      appearance="secondary"
      iconAppearance="secondary"
      iconBackground="sand"
      type="text"
      placeholder="Secondary color"
    />
  ));
