import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import List from "../../Elements/List";
import ListItem from "../../Elements/ListItem";

storiesOf("List", module)
  .add("Unordered list", () => (
    <List>
      <ListItem>List item</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </List>
  ))
  .add("Ordered list", () => (
    <List listType="ol">
      <ListItem>List item</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </List>
  ));
