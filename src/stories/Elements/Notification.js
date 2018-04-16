import React from "react";

import { storiesOf } from "@storybook/react";

import Notification from "../../Elements/Notification";

storiesOf("Notification", module)
  .add("Default", () => (
    <Notification>Default! This is the default notification.</Notification>
  ))
  .add("Success", () => (
    <Notification color="success">
      Success! This is the success notification.
    </Notification>
  ))
  .add("Danger", () => (
    <Notification color="Danger">
      Danger! This is the danger notification.
    </Notification>
  ))
  .add("Default - bottomLeft", () => (
    <Notification position="bottomLeft">
      Default! This is a default notification with position set to bottomLeft.
    </Notification>
  ));
