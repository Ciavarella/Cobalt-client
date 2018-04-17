import React from "react";
import { css, withStyles } from "../withStyles";

const List = ({ direction = "column", listType = "ul", styles, ...props }) => {
  const ListType = listType;
  return <ListType {...css(styles[direction], styles.list)} {...props} />;
};

export default withStyles(({ themes }) => {
  return {
    list: {
      marginLeft: "20px",
      width: "30%",
      display: "flex",
      alignItems: "flex-start"
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
