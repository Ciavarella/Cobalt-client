import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Input from "../../Elements/Input";

storiesOf("Input", module)
  .add("Default", () => <Input type="text" placeholder="Default" />)
  .add("Email", () => <Input type="email" placeholder="Email" />)
  .add("Password", () => <Input type="password" placeholder="Password" />)
  .add("Number", () => <Input type="number" placeholder="Number" />)
  .add("Focused", () => (
    <Input appearance="secondary" type="text" placeholder="Secondary" />
  ))
  .add("Success", () => (
    <Input appearance="success" type="text" placeholder="Success" />
  ))
  .add("Error", () => (
    <Input appearance="danger" type="text" placeholder="Error" />
  ));
