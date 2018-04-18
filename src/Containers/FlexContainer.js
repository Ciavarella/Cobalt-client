import React from "react";
import { css, withStyles } from "../withStyles";

const FlexContainer = ({
  styles,
  direction = "column",
  align = "center",
  position = null,
  ...props
}) => (
  <div
    {...css(
      styles.flexContainer,
      styles[direction],
      styles[align],
      styles[position]
    )}
    {...props}
  >
    {props.children}
  </div>
);

export default withStyles(() => {
  return {
    flexContainer: {
      display: "flex"
    },
    column: {
      flexDirection: "column"
    },
    row: {
      flexDirection: "row",
      alignItems: "center"
    },
    start: {
      alignItems: "flex-start"
    },
    end: {
      alignItems: "flex-end"
    },
    center: {
      alignItems: "center"
    },
    spaceBetween: {
      justifyContent: "space-between"
    }
  };
})(FlexContainer);
