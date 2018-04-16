import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Icon from "../../Elements/Icon";

storiesOf("Icon", module)
  .add("Default", () => (
    <Icon>
      <i class="fab fa-accessible-icon" />
    </Icon>
  ))
  .add("Medium", () => (
    <Icon size="medium">
      <i class="fab fa-accessible-icon" />
    </Icon>
  ))
  .add("Large", () => (
    <Icon size="large">
      <i class="fab fa-accessible-icon" />
    </Icon>
  ));
