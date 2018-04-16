import React from "react";
import { css, withStyles } from "../withStyles";

const Notification = ({
  styles,
  appearance = "default",
  position = "bottomRight",
  ...props
}) => (
  <div
    {...css(styles.notification, styles[appearance], styles[position])}
    {...props}
  />
);

export default withStyles(({ themes }) => {
  return {
    notification: {
      position: "fixed",

      /* FlexContainer? */
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      /* From theme? */
      border: "2px solid",
      borderRadius: "5px",
      padding: "2.5rem"
    },

    /* Appearance */
    default: themes.default,
    success: themes.success,
    danger: themes.danger,

    /* Position */
    bottomRight: {
      bottom: "2.5rem",
      right: "2.5rem"
    },
    bottomLeft: {
      bottom: "2.5rem",
      left: "2.5rem"
    }
  };
})(Notification);
