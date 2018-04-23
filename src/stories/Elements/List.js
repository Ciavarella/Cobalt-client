import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import List from "../../Elements/List";
import ListItem from "../../Elements/ListItem";
import ListItemWithIcon from "../../Elements/ListItemWithIcon";

storiesOf("List", module)
  .add("Unordered list (column)", () => (
    <List>
      <ListItem>List item</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </List>
  ))
  .add("Unordered list (row)", () => (
    <List direction="row">
      <ListItem>List item</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </List>
  ))
  .add("Ordered list(column)", () => (
    <List style={{ marginLeft: "20px" }} listType="ol">
      <ListItem>List item</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </List>
  ))
  .add("Ordered list(row)", () => (
    <List direction="row" listType="ol">
      <ListItem>List item</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </List>
  ))
  .add("List with icon (left)", () => (
    <List style={{ width: "10%" }}>
      <ListItemWithIcon icon={<i className="fab fa-angellist" />}>
        List item
      </ListItemWithIcon>
      <ListItemWithIcon icon={<i className="fab fa-angellist" />}>
        List item 2
      </ListItemWithIcon>
      <ListItemWithIcon icon={<i className="fab fa-angellist" />}>
        List item 3
      </ListItemWithIcon>
    </List>
  ))
  .add("List with icon (right)", () => (
    <List>
      <ListItemWithIcon
        icon={<i className="fab fa-angellist" />}
        iconPosition="right"
      >
        List item
      </ListItemWithIcon>
      <ListItemWithIcon
        icon={<i className="fab fa-angellist" />}
        iconPosition="right"
      >
        List item 2
      </ListItemWithIcon>
      <ListItemWithIcon
        icon={<i className="fab fa-angellist" />}
        iconPosition="right"
      >
        List item 3
      </ListItemWithIcon>
    </List>
  ));
