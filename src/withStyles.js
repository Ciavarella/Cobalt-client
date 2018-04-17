import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite/no-important";
import { css, withStyles } from "react-with-styles";
import * as THEME from "./MainTheme";

ThemedStyleSheet.registerTheme({
  /* Colors */
  themes: {
    default: {
      color: THEME.COLOR_NIGHTSKY,
      backgroundColor: "white",
      borderColor: THEME.COLOR_NIGHTSKY,
      ":hover": {
        color: THEME.COLOR_NIGHTSKY_HIGHLIGHT
      }
    },
    primary: {
      color: "white",
      borderColor: "transparent",
      backgroundColor: THEME.COLOR_PRIMARY,
      ":hover": {
        color: "white",
        backgroundColor: THEME.COLOR_PRIMARY_HIGHLIGHT
      }
    },
    secondary: {
      color: "white",
      backgroundColor: THEME.COLOR_SECONDARY,
      borderColor: THEME.COLOR_SECONDARY,
      ":hover": {
        color: "white",
        backgroundColor: THEME.COLOR_SECONDARY_HIGHLIGHT
      }
    },
    success: {
      color: "white",
      backgroundColor: THEME.COLOR_SUCCESS,
      borderColor: THEME.COLOR_SUCCESS,
      ":hover": {
        color: "white",
        backgroundColor: THEME.COLOR_SUCCESS_HIGHLIGHT
      }
    },
    danger: {
      color: "white",
      borderColor: THEME.COLOR_DANGER,
      backgroundColor: THEME.COLOR_DANGER,
      ":hover": {
        color: "white",
        backgroundColor: THEME.COLOR_DANGER_HIGHLIGHT
      }
    }
  },

  /* Sizes */
  text: {
    xs: {
      fontSize: "12px"
    },
    small: {
      fontSize: "16px"
    },
    medium: {
      fontSize: "18px"
    },
    large: {
      fontSize: "24px"
    }
  },

  shadow: {
    boxShadow: "0 1px 1px rgba(0, 0, 0, .1)"
  }
});
ThemedStyleSheet.registerInterface(aphroditeInterface);

export { css, withStyles, ThemedStyleSheet };
