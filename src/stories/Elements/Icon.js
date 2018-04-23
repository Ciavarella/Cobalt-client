import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Icon from "../../Elements/Icon";

storiesOf("Icon", module)
  .add("xs", () => (
    <Icon icon="fab fa-accessible-icon" size="xs" fillColor="primary" />
  ))
  .add("small", () => (
    <Icon icon="fab fa-accessible-icon" size="small" fillColor="secondary" />
  ))
  .add("medium", () => (
    <Icon icon="fab fa-accessible-icon" size="medium" fillColor="nightsky" />
  ))
  .add("large", () => (
    <Icon icon="fab fa-accessible-icon" size="large" fillColor="danger" />
  ));
