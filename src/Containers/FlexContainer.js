import React from "react";
import { css, withStyles } from "../withStyles";

const FlexContainer = ({
  styles,
  direction = "column",
  align = "center",
  justify = "start",
  flex = null,
  ...props
}) => {
  const flexSize = `flex${flex}`;
  return (
    <div
      {...css(
        styles.flexContainer,
        styles[direction],
        styles.align[align],
        styles.justify[justify],
        styles[flexSize]
      )}
      {...props}
    />
  );
};

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
    justify: {
      start: {
        justifyContent: "flex-start"
      },
      end: {
        justifyContent: "flex-end"
      },
      center: {
        justifyContent: "center"
      },
      spaceBetween: {
        justifyContent: "space-around"
      },
      spaceAround: {
        justifyContent: "space-around"
      }
    },
    align: {
      start: {
        alignItems: "flex-start"
      },
      end: {
        alignItems: "flex-end"
      },
      center: {
        alignItems: "center"
      }
    },
    flex1: {
      flex: "1"
    },
    flex2: {
      flex: "2"
    },
    flex3: {
      flex: "3"
    },
    flex4: {
      flex: "4"
    }
  };
})(FlexContainer);
