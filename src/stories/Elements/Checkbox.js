import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Checkbox from "../../Elements/Checkbox";

storiesOf("Checkbox", module)
  .add("Checkbox", () => <Checkbox type="checkbox" />)
  .add("Radiobutton", () => <Checkbox type="radio" />);
