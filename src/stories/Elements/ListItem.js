import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import ListItem from "../../Elements/ListItem";

storiesOf("List", module).add("List item", () => (
  <ListItem>List item</ListItem>
));
