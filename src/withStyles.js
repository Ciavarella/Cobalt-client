import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite/no-important";
import { css, withStyles } from "react-with-styles";

ThemedStyleSheet.registerTheme({
  /* Colors */
  theme: {
    default: {
      color: "black",
      backgroundColor: "white",
      borderColor: "black",
      ":hover": {
        color: "grey"
      }
    },
    primary: {
      color: "white",
      borderColor: "transparent",
      backgroundColor: "blue",
      ":hover": {
        color: "lightblue"
      }
    },
    secondary: {
      color: "orange",
      borderColor: "orange",
      ":hover": {
        color: "darkorange"
      }
    },
    success: {
      color: "green",
      borderColor: "green",
      ":hover": {
        color: "darkgreen"
      },
    },
    error: {
      color: "red",
      borderColor: "red",
      ":hover": {
        color: "darkred"
      }
    }
  },

  /* Sizes */
  text: {
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
