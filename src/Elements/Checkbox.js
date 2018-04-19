import React from "react";
import { css, withStyles } from "../withStyles";

const Checkbox = ({ styles, ...props }) => (
  <label {...css(styles.container)}>
    <input {...css(styles.checkbox)} {...props} />
    <span {...css(styles.checkmark)} />
  </label>
);

export default withStyles(({ theme }) => {
  return {
    checkbox: {},
    container: {},
    checkmark: {}
  };
})(Checkbox);
