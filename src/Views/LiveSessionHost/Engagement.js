import React from "react";
import { css, withStyles } from "../../withStyles";

const Engagement = ({ styles, ...props }) => {
  let negative = props.data.engagement.negative;
  let positive = props.data.engagement.positive;

  if (props.data.status.isAverage) {
    positive = props.getPercentageFromAvg(props.data.engagement.average);
    negative = 100 - positive;
  }

  return (
    <React.Fragment>
      <div {...css(styles.graphRed)} style={{ width: `${negative}%` }}>
        <span>{negative > 10 ? `${negative}%` : null}</span>
      </div>
      <div {...css(styles.graphGreen)} style={{ width: `${positive}%` }}>
        <span>{positive > 10 ? `${positive}%` : null}</span>
      </div>
    </React.Fragment>
  );
};

export default withStyles(({ colors }) => {
  return {
    warning: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      backgroundColor: colors.danger
    },
    graphRed: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "78px",
      color: "white",
      backgroundColor: colors.danger,
      ":after": {
        background: "inherit",
        bottom: "0",
        content: "''",
        display: "block",
        left: "0",
        position: "absolute",
        right: "0",
        transform: "skewX(-4deg)",
        height: "100%",
        width: "inherit",
        transition: "all 0.6s ease"
      }
    },
    graphGreen: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "78px",
      color: "white",
      backgroundColor: colors.success,
      ":after": {
        background: "inherit",
        bottom: "0",
        content: "''",
        display: "block",
        right: "0px",
        zIndex: "98",
        position: "absolute",
        transform: "skewX(-4deg)",
        transformOrigin: "100%",
        height: "100%",
        width: "inherit",
        transition: "all 0.6s ease"
      }
    }
  };
})(Engagement);
