import React from "react";
import { css, withStyles } from "../withStyles";

const Input = ({ appearance = "default", styles, ...props }) => (
  <input {...css(styles.input, styles[appearance])} {...props} />
);

export default withStyles(({ themes }) => {
  return {
    input: {
      padding: "12px",
      margin: "20px",
      border: "2px solid"
    },

    default: {
      borderColor: themes.default.borderColor
    },
    primary: {
      borderColor: "blue"
    },
    secondary: {
      borderColor: themes.secondary.borderColor
    },
    success: {
      borderColor: themes.success.borderColor
    },
    danger: {
      borderColor: themes.danger.borderColor
    }
  };
})(Input);
