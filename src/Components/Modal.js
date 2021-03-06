import React from "react";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";

const Modal = ({
  withOverlay = false,
  withAnimation = false,
  styles,
  ...props
}) => (
  <div
    {...css(withOverlay === true && styles.overlayColor, styles.overlay)}
    {...props}
  >
    <div
      {...css(
        withAnimation === true && styles.animation,
        styles.rounded,
        styles.shadow,
        styles.modal
      )}
    >
      <FlexContainer>{props.children}</FlexContainer>
    </div>
  </div>
);

export default withStyles(({ colors, rounded, shadow }) => {
  return {
    modal: {
      backgroundColor: colors.carbon,
      padding: "40px",
      zIndex: "100",
      position: "relative"
    },
    overlay: {
      width: "100%",
      height: "100%",
      position: "fixed",
      top: "0",
      left: "0",
      zIndex: "999",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    overlayColor: {
      backgroundColor: "rgba(0, 0, 0, 0.7)"
    },
    animation: {
      animation: "fade 0.5s ease"
    },
    rounded: rounded,
    shadow: shadow
  };
})(Modal);
