import React from "react";
import { css, withStyles } from "../withStyles";

import Icon from "./Icon";

const Loader = ({ styles, fillColor = "white", size = "small", ...props }) => {
  return (
    <div {...css(styles.loader)}>
      <Icon icon="fas fa-spinner" size={size} fillColor={fillColor} />
    </div>
  );
};

export default withStyles(({ themes }) => {
  return {
    loader: {
      ":nth-child(1) svg": {
        animation: "spin 1.5s ease infinite"
      }
    }
  };
})(Loader);
