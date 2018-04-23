import React from "react";
import { css, withStyles } from "../withStyles";

const List = ({
  spacing = "1em",
  direction = "column",
  listType = "ul",
  styles,
  ...props
}) => {
  const ListType = listType;
  return <ListType {...css(styles[direction], styles.list)} {...props} />;
};

/* TODO: Fix dynamic spacing */
export default withStyles(({ themes }) => {
  return {
    list: {
      display: "flex",
      alignItems: "flex-start",
      ":nth-child(1n) li": {
        marginRight: "3em"
      }
    },
    column: {
      flexDirection: "column"
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-evenly"
    }
  };
})(List);
