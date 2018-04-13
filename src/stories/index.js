import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import "../index.css";

import Button from "../Elements/Button";
import Input from "./Elements/Input";

storiesOf("Button", module)
  .add("Default", () => <Button>Default button</Button>)
  .add("Primary", () => <Button color="primary">Primary Button</Button>)
  .add("Secondary", () => (
    <Button color="secondary" onClick={() => console.log("secondary click")}>
      Secondary Button
    </Button>
  ));
