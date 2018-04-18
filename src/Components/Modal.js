import React from "react";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";

const Modal = ({ styles, ...props }) => (
  <div {...css(styles.modal)} {...props}>
    <FlexContainer>
      <div>{props.children}</div>
    </FlexContainer>
  </div>
);

export default withStyles(({ colors }) => {
  return {
    modal: {
      width: "100%",
      heigth: "100%",
      position: "fixed",
      backgroundColor: colors.darkMetal,
      zIndex: "99"
    }
  };
})(Modal);
