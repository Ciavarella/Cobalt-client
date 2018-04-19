import React from "react";

import { storiesOf } from "@storybook/react";

import CopyTextfield from "../../Elements/CopyTextfield";

storiesOf("CopyTextfield", module)
  .add("Not passing URL", () => <CopyTextfield />)
  .add("Passing URL", () => <CopyTextfield url="New url" />);
