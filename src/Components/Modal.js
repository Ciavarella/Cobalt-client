import React from "react";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";

const Modal = ({ fade = null, styles, ...props }) => (
  <div {...css(styles[fade], styles.overlay)} {...props}>
    <div {...css(styles.rounded, styles.modal)}>
      <FlexContainer>{props.children}</FlexContainer>
    </div>
  </div>
);

export default withStyles(({ colors, rounded }) => {
  return {
    modal: {
      backgroundColor: colors.carbon,
      padding: "40px",
      zIndex: "100"
    },
    overlay: {
      width: "100%",
      height: "100%",
      position: "fixed",
      top: "0",
      left: "0",
      zIndex: "99",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    fade: {
      backgroundColor: "rgba(0, 0, 0, 0.7)"
    },
    rounded: rounded
  };
})(Modal);
