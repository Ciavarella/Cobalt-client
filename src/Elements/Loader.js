import React from "react";
import { css, withStyles } from "../withStyles";

import Icon from "./Icon";

const Loader = ({ styles, fillColor = "white", ...props }) => {
  return (
    <div {...css(styles.loader)}>
      <Icon icon="fas fa-spinner" fillColor={fillColor} />
    </div>
  );
};

export default withStyles(({ themes }) => {
  return {
    loader: {
      ":nth-child(1) svg": {
        margin: "10px",
        animation: "spin 1.5s ease infinite"
      }
    }
  };
})(Loader);
