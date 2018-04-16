import React from "react";
import { css, withStyles } from "../withStyles";

const List = ({ listType = "ul", styles, ...props }) => {
  const ListType = listType;
  return <ListType {...css(styles.list)} {...props} />;
};

export default withStyles(({ themes }) => {
  return {
    list: {
      margin: "30px"
    }
  };
})(List);
