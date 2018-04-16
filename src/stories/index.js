import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import "../index.css";

import Button from "./Elements/Button";
import Input from "./Elements/Input";
import Heading from "./Elements/Heading";
import Avatar from "./Elements/Avatar";
import Paragraph from "./Elements/Paragraph";
import NotFound from "./Views/NotFound";
<<<<<<< HEAD
=======

storiesOf("Button", module)
  .add("Default", () => <Button>Default button</Button>)
  .add("Primary", () => <Button color="primary">Primary Button</Button>)
  .add("Secondary", () => (
    <Button color="secondary" onClick={() => console.log("secondary click")}>
      Secondary Button
    </Button>
  ));
>>>>>>> 46099c0a88df82326b8a5aafbf9855e2e70ea449
