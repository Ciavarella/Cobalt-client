import React from "react";
import { css, withStyles } from "../withStyles";

const Input = ({ color = "default", styles, ...props }) => (
  <input {...css(styles.input, styles[color])} {...props} />
);

export default withStyles(({ theme }) => {
  return {
    input: {
      padding: "12px",
      margin: "20px",
      border: "2px solid"
    },

    default: {
      borderColor: theme.default.borderColor
    },
    primary: {
      borderColor: "blue"
    },
    secondary: {
      borderColor: theme.secondary.borderColor
    },
    success: {
      borderColor: theme.success.borderColor
    },
    error: {
      borderColor: theme.error.borderColor
    }
  };
})(Input);
