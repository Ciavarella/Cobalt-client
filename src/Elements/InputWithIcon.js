import React from "react";
import { css, withStyles } from "../withStyles";
import Icon from "./Icon";

const InputWithIcon = ({
  appearance = "default",
  icon = null,
  iconAppearance = "default",
  iconPosition = "left",
  iconColor = "default",
  styles,
  ...props
}) => (
  <div>
    {iconPosition === "left" ? (
      <Icon appearance={iconAppearance}>{icon}</Icon>
    ) : (
      ""
    )}
    <input {...css(styles.input, styles[appearance])} {...props} />
    {iconPosition === "right" ? (
      <Icon appearance={iconAppearance}>{icon}</Icon>
    ) : (
      ""
    )}
  </div>
);

export default withStyles(({ themes }) => {
  return {
    input: {
      padding: "12px",
      border: "2px solid"
    },

    default: {
      borderColor: themes.default.borderColor
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
})(InputWithIcon);
