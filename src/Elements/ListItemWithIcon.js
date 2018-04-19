import React from "react";
import { css, withStyles } from "../withStyles";
import Icon from "./Icon";
import ListItem from "./ListItem";

const ListItemWithIcon = ({
  icon = null,
  iconPosition = "left",
  iconAppearance = "default",
  styles,
  ...props
}) => (
  <ListItem {...css(styles[iconPosition], styles.listItemWithIcon)} {...props}>
    <Icon appearance={iconAppearance}>{icon}</Icon>
    {props.children}
  </ListItem>
);

export default withStyles(({ themes }) => {
  return {
    listItemWithIcon: {
      display: "flex",
      alignItems: "center",
      width: "100%"
    },
    left: {
      flexDirection: "row"
    },
    right: {
      justifyContent: "space-between",
      flexDirection: "row-reverse"
    }
  };
})(ListItemWithIcon);
