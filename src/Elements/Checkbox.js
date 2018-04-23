import React from "react";
import { css, withStyles } from "../withStyles";

const Checkbox = ({
  type = "checkbox",
  appearance = "primary",
  name = null,
  styles,
  ...props
}) => {
  return (
    <label {...css(styles[type], styles[appearance])}>
      <input name={name} type={type} />
      <span />
    </label>
  );
};

export default withStyles(({ themes, colors }) => {
  return {
    checkbox: {
      display: "block",
      position: "relative",
      paddingLeft: "35px",
      marginBottom: "12px",
      cursor: "pointer",
      fontSize: "22px",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      ":nth-child(1n) input": {
        position: "absolute",
        opacity: "0",
        cursor: "pointer"
      },
      ":nth-child(1n) span": {
        position: "absolute",
        top: "0",
        left: "0",
        height: "25px",
        width: "25px",
        backgroundColor: "#eee",
        "::after": {
          content: '""',
          position: "absolute",
          display: "none",
          left: "9px",
          top: "5px",
          width: "5px",
          height: "10px",
          border: "solid white",
          borderWidth: "0 3px 3px 0",
          webkitTransform: "rotate(45deg)",
          msTransform: "rotate(45deg)",
          transform: "rotate(45deg)"
        }
      },
      ":nth-child(1n) input:checked + span::after": {
        display: "block"
      },
      ":hover input + span": {
        backgroundColor: "#ccc"
      }
    },
    radio: {
      display: "block",
      position: "relative",
      paddingLeft: "35px",
      marginBottom: "12px",
      cursor: "pointer",
      fontSize: "22px",
      webkitUserSelect: "none",
      mozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      ":nth-child(1n) input": {
        position: "absolute",
        opacity: "0"
      },
      ":nth-child(1n) span": {
        position: "absolute",
        top: "0",
        left: "0",
        height: "25px",
        width: "25px",
        backgroundColor: "#eee",
        borderRadius: "50%",
        "::after": {
          content: '""',
          position: "absolute",
          display: "none",
          top: "9px",
          left: "9px",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "white"
        }
      },
      ":nth-child(1n) input:checked + span::after": {
        display: "block"
      },
      ":hover input + span": {
        backgroundColor: "#ccc"
      }
    },

    primary: {
      ":nth-child(1n) input": {
        ":checked + span": {
          backgroundColor: colors.primary
        }
      }
    },
    secondary: {
      ":nth-child(1n) input": {
        ":checked + span": {
          backgroundColor: colors.secondary
        }
      }
    },
    success: {
      ":nth-child(1n) input": {
        ":checked + span": {
          backgroundColor: colors.success
        }
      }
    },
    danger: {
      ":nth-child(1n) input": {
        ":checked + span": {
          backgroundColor: colors.danger
        }
      }
    },
    nightsky: {
      ":nth-child(1n) input": {
        ":checked + span": {
          backgroundColor: colors.nightsky
        }
      }
    },
    dawn: {
      ":nth-child(1n) input": {
        ":checked + span": {
          backgroundColor: colors.dawn
        }
      }
    },
    carbon: {
      ":nth-child(1n) input": {
        ":checked + span": {
          backgroundColor: colors.carbon
        }
      }
    },
    aluminum: {
      ":nth-child(1n) input": {
        ":checked + span": {
          backgroundColor: colors.aluminum
        }
      }
    },
    darkMetal: {
      ":nth-child(1n) input": {
        ":checked + span": {
          backgroundColor: colors.darkMetal
        }
      }
    },
    sand: {
      ":nth-child(1n) input": {
        ":checked + span": {
          backgroundColor: colors.sand
        }
      }
    }
  };
})(Checkbox);
