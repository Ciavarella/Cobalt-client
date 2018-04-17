import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import InputWithIcon from "../../Elements/InputWithIcon";

storiesOf("Input with icon", module)
  .add("Default (Left side)", () => (
    <InputWithIcon
      icon={<i class="fas fa-users" />}
      type="text"
      placeholder="Default (Left side)"
    />
  ))
  .add("Right side", () => (
    <InputWithIcon
      icon={<i class="fas fa-users" />}
      iconPosition="right"
      type="text"
      placeholder="Right side"
    />
  ))
  .add("Primay color", () => (
    <InputWithIcon
      icon={<i class="fas fa-users" />}
      appearance="primary"
      iconAppearance="primary"
      type="text"
      placeholder="Right side"
    />
  ))
  .add("Secondary color", () => (
    <InputWithIcon
      icon={<i class="fas fa-users" />}
      iconAppearance="secondary"
      type="text"
      placeholder="Right side"
    />
  ));
