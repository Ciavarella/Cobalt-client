import React from "react";
import { css, withStyles } from "../withStyles";

const List = ({ direction = "column", listType = "ul", styles, ...props }) => {
  const ListType = listType;
  return <ListType {...css(styles[direction], styles.list)} {...props} />;
};

export default withStyles(({ themes }) => {
  return {
    list: {
      display: "flex",
      alignItems: "flex-start",
      flex: "1"
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
