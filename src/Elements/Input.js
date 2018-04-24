import React from "react";
import { css, withStyles } from "../withStyles";
import Icon from "./Icon";

const Input = ({
  icon = null,
  iconFillColor = "default",
  iconPosition = "left",
  iconBackground = null,
  appearance = "default",
  styles,
  ...props
}) => (
  <div>
    {icon ? (
      <div {...css(styles[iconBackground])}>
        <Icon iconFillColor={iconFillColor} icon={icon} />
      </div>
    ) : (
      ""
    )}
    <input {...css(styles.input, styles[appearance])} {...props} />
  </div>
);

export default withStyles(({ themes, colors }) => {
  return {
    input: {
      padding: "12px",
      margin: "20px",
      border: "1px solid",
      borderRadius: "2px",
      width: "100%",
      minWidth: "120px",
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
