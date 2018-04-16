import React from "react";
import { css, withStyles } from "../withStyles";

const ListItem = ({ styles, ...props }) => (
  <li {...css(styles.listItem)} {...props} />
);

export default withStyles(({ themes }) => {
  return {
    listItem: {}
  };
})(ListItem);
