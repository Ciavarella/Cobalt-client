import React from "react";

import { storiesOf } from "@storybook/react";

import Avatar from "../../Elements/Avatar";

storiesOf("Avatar", module)
  .add("Default (Small)", () => <Avatar image="https://placehold.it/64x128" />)
  .add("Medium", () => (
    <Avatar size="medium" image="https://placehold.it/64x128" />
  ))
  .add("Large", () => (
    <Avatar size="large" image="https://placehold.it/64x128" />
  ))
  .add("Medium - Text passed", () => <Avatar size="medium">JD</Avatar>)
  .add("Default (Small) - No image passed", () => <Avatar />);
