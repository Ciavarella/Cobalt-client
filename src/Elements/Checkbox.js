import React from "react";
import { css, withStyles } from "../withStyles";

const Checkbox = ({ styles, ...props }) => (
  <input {...css(styles.checkbox)} {...props} />
);

export default withStyles(({ theme }) => {
  return {
    checkbox: {
      margin: "20px"
    }
  };
})(Checkbox);
