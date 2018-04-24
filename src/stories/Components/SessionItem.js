import React from "react";

import { storiesOf } from "@storybook/react";

import SessionItem from "../../Components/SessionItem";

storiesOf("Session Item", module)
  .add("Session item", () => (
    <SessionItem
      description="This is a description"
      title="Awsome title here"
      date="20 April 2018"
      attendees="233"
    />
  ))
  .add("Passing description", () => (
    <SessionItem
      description="This is a really really long description, not everything should be shown here beacuse it only takes 80 characters"
      title="This is my title"
      date="14 March 2017"
      attendees="133"
    />
  ));
