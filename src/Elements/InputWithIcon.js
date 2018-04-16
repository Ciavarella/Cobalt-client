import React from "react";
import { css, withStyles } from "../withStyles";
import Icon from "./Icon";

const InputWithIcon = ({ color = "default", icon = null, iconPosition = "left", iconColor="default", styles, ...props }) => (
  <div>
    {iconPosition === 'left' ? <Icon color={iconColor}>{icon}</Icon> : ''}
    <input {...css(styles.input, styles[color])} {...props} />
    {iconPosition === 'right' ? <Icon color={iconColor}>{icon}</Icon> : ''}
  </div>
);

export default withStyles(({ theme }) => {
  return {
    input: {
      padding: "12px",
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
})(InputWithIcon);
