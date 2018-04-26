import React from "react";
import { css, withStyles } from "../../withStyles";

const Warning = ({ styles, ...props }) => {
  return (
    <div {...css(styles.warning)}>
      <span>Engagement threshold reached</span>
      <span>{props.red}%</span>
    </div>
  );
};

export default withStyles(({ colors }) => {
  return {
    warning: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      backgroundColor: colors.danger,
      color: "white",
      fontSize: "48px"
    }
  };
})(Warning);
