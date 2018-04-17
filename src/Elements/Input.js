import React from "react";
import { css, withStyles } from "../withStyles";

const Input = ({ appearance = "default", styles, ...props }) => (
  <input {...css(styles.input, styles[appearance])} {...props} />
);

export default withStyles(({ themes, colors }) => {
  return {
    input: {
      padding: "12px",
      margin: "20px",
      border: "1px solid",
      borderRadius: "2px",
      ":focus": {
        borderColor: colors.secondary
      }
    },

    default: {
      borderColor: colors.aluminum
    },
    primary: {
      borderColor: themes.primary.borderColor
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
