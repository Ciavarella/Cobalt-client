import React from "react";
import { css, withStyles } from "../withStyles";

const Notification = ({
  styles,
  appearance = "default",
  position = "bottomRight",
  ...props
}) => (
  <div
    {...css(styles.notification, styles[color], styles[position])}
    {...props}
  />
);

export default withStyles(({ theme }) => {
  return {
    notification: {
      position: "fixed",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      border: "2px solid",
      borderRadius: "5px",
      padding: "2.5rem"
    },

    /* Color */
    default: theme.default,
    success: theme.success,
    danger: theme.danger,

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
