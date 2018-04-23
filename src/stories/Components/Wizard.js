import React from "react";

import { storiesOf } from "@storybook/react";

import Name from "../../Components/CreateSession/Name";
import Preferences from "../../Components/CreateSession/Preferences";
import End from "../../Components/CreateSession/End";
import Wizard from "../../Components/Wizard";

storiesOf("Wizard", module)
  .add("Session wizard", () => (
    <Wizard>
      <Name />
      <Preferences />
      <End />
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
  ))
  .add("Step three", () => (
    <Wizard>
      <End />
      <div style={{ color: "white" }}>Dummy</div>
    </Wizard>
  ));
