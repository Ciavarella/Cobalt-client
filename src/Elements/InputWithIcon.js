import React from "react";
import { css, withStyles } from "../withStyles";
import Icon from "./Icon";
import Input from "./Input";

const InputWithIcon = ({
  appearance = "default",
  icon = null,
  iconAppearance = "default",
  iconPosition = "left",
  iconColor = "default",
  placeholder = null,
  styles,
  ...props
}) => (
  <div>
    {iconPosition === "left" ? (
      <Icon appearance={iconAppearance}>{icon}</Icon>
    ) : (
      ""
    )}
    <Input appearance={appearance} placeholder={placeholder} />
    {iconPosition === "right" ? (
      <Icon appearance={iconAppearance}>{icon}</Icon>
    ) : (
      ""
    )}
  </div>
);

export default withStyles(({ themes }) => {
  return {
    inputWithIcon: {}
  };
})(InputWithIcon);
