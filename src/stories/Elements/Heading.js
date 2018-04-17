import React from "react";
import { storiesOf } from "@storybook/react";

import Heading from "../../Elements/Heading";

storiesOf("Heading", module)
  .add("h1", () => <Heading size="1">Montserrat 38</Heading>)
  .add("h2", () => <Heading size="2">Montserrat 24</Heading>)
  .add("h3", () => <Heading size="3">Montserrat 18</Heading>)
  .add("h4", () => <Heading size="4">Montserrat 16</Heading>)
  .add("h5", () => <Heading size="5">Montserrat 14</Heading>);
