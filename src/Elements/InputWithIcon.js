import React from "react";
import { css, withStyles } from "../withStyles";
import Icon from "./Icon";
import Input from "./Input";

const InputWithIcon = ({
  appearance = "default",
  icon = null,
  iconFillColor = "default",
  iconPosition = "left",
  iconBackground = null,
  placeholder = null,
  name = null,
  value = null,
  type = "text",
  styles,
  ...props
}) => (
  <div {...css(styles.inputWithIcon, styles[iconPosition])} {...props}>
    <div {...css(styles[iconBackground], styles.flex)}>
      <Icon fillColor={iconFillColor} icon={icon} />
    </div>
    <Input
      type={type}
      value={value}
      name={name}
      appearance={appearance}
      placeholder={placeholder}
    />
  </div>
);

export default withStyles(({ themes, colors }) => {
  return {
    inputWithIcon: {
      display: "flex",
      width: "100%",
      alignItems: "center"
    },
    left: {
      ":nth-child(1n) input": {
        marginLeft: "0px"
      }
    },
    right: {
      flexDirection: "row-reverse",
      marginRight: "0px"
    },
    flex: {
      display: "flex"
    },
    primary: { backgroundColor: colors.primary },
    secondary: { backgroundColor: colors.secondary },
    danger: { backgroundColor: colors.danger },
    dawn: { backgroundColor: colors.dawn },
    nightsky: { backgroundColor: colors.nightsky },
    carbon: { backgroundColor: colors.carbon },
    darkMetal: { backgroundColor: colors.darkMetal },
    aluminum: { backgroundColor: colors.aluminum },
    sand: { backgroundColor: colors.sand }
  };
})(InputWithIcon);
