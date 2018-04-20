import React from "react";
import { css, withStyles } from "../withStyles";

const LandingPage = ({ styles, ...props }) => {
  return <div {...css(styles.landingPage)} />;
};

export default withStyles(({ colors, gradients }) => {
  return {
    landingPage: {
      display: "flex",
      height: "100%",
      width: "100%",
      position: "absolute",
      zIndex: "-99",
      background: gradients.carbon
    },
    icon: {
      width: "128px",
      marginBottom: "48px"
    }
  };
})(LandingPage);
