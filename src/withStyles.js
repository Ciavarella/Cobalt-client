import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite/no-important";
import { css, withStyles } from "react-with-styles";
import * as THEME from "./MainTheme";

ThemedStyleSheet.registerTheme({
  /* Colors */
  colors: {
    primary: THEME.COLOR_PRIMARY,
    secondary: THEME.COLOR_SECONDARY,
    success: THEME.COLOR_SUCCESS,
    danger: THEME.COLOR_DANGER,
    nightsky: THEME.COLOR_NIGHTSKY,
    dawn: THEME.COLOR_DAWN,
    carbon: THEME.COLOR_CARBON,
    aluminum: THEME.COLOR_ALUMINUM,
    darkMetal: THEME.COLOR_DARK_METAL,
    sand: THEME.COLOR_SAND
  },
  /* Gradients */
  gradients: {
    primary: THEME.GRADIENT_PRIMARY,
    secondary: THEME.GRADIENT_SECONDARY,
    success: THEME.GRADIENT_SUCCESS,
    danger: THEME.GRADIENT_DANGER
  },
  /* themes */
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
        backgroundColor: THEME.COLOR_PRIMARY_HIGHLIGHT
      }
    },
    secondary: {
      color: "white",
      backgroundColor: THEME.COLOR_SECONDARY,
      borderColor: THEME.COLOR_SECONDARY,
      ":hover": {
        backgroundColor: THEME.COLOR_SECONDARY_HIGHLIGHT
      }
    },
    success: {
      color: "white",
      backgroundColor: THEME.COLOR_SUCCESS,
      borderColor: THEME.COLOR_SUCCESS,
      ":hover": {
        backgroundColor: THEME.COLOR_SUCCESS_HIGHLIGHT
      }
    },
    danger: {
      color: "white",
      borderColor: THEME.COLOR_DANGER,
      backgroundColor: THEME.COLOR_DANGER,
      ":hover": {
        backgroundColor: THEME.COLOR_DANGER_HIGHLIGHT
      }
    },
    primaryGradient: {
      background: THEME.GRADIENT_PRIMARY
    },
    secondaryGradient: {
      background: THEME.GRADIENT_SECONDARY
    },
    successGradient: {
      background: THEME.GRADIENT_SUCCESS
    },
    dangerGradient: {
      background: THEME.GRADIENT_DANGER
    }
  },

  /* Sizes */
  text: {
    xs: {
      fontSize: "10px"
    },
    small: {
      fontSize: "14px"
    },
    medium: {
      fontSize: "16px"
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
