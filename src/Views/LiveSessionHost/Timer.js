import React from "react";
import { css, withStyles } from "../../withStyles";

const Timer = ({ styles, ...props }) => {
  return (
    <div {...css(styles.timer)}>
      <span>{props.time}</span>
    </div>
  );
};

export default withStyles(({ colors }) => {
  return {
    timer: {
      fontSize: "4.8rem",
      color: "white"
    }
  };
})(Timer);
