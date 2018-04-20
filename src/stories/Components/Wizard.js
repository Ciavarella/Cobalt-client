import React from "react";

import { storiesOf } from "@storybook/react";

import Name from "../../Components/CreateSession/Name";
import Preferences from "../../Components/CreateSession/Preferences";
import Wizard from "../../Components/Wizard";

storiesOf("Wizard", module)
  .add("Session wizard", () => (
    <Wizard>
      <Name />
      <Preferences />
      <div style={{ color: "white" }}>Page Three</div>
    </Wizard>
  ))
  .add("Step one", () => (
    <Wizard>
      <Name />
      <div style={{ color: "white" }}>Dummy</div>
    </Wizard>
  ))
  .add("Step two", () => (
    <Wizard>
      <Preferences />
      <div style={{ color: "white" }}>Dummy</div>
    </Wizard>
  ));
