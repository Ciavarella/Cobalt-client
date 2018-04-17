import React from "react";
import { css, withStyles } from "../withStyles";
import Icon from "./Icon";

const ListItemWithIcon = ({
  icon = null,
  iconPosition = "left",
  styles,
  ...props
}) => (
  <li {...css(styles[iconPosition], styles.listItemWithIcon)} {...props}>
    <Icon>{icon}</Icon>
    {props.children}
  </li>
);

export default withStyles(({ themes }) => {
  return {
    listItemWithIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    },
    left: {
      flexDirection: "row"
    },
    right: {
      flexDirection: "row-reverse"
    }
  };
})(ListItemWithIcon);
