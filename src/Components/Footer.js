import React from "react";
import { css, withStyles } from "../withStyles";

const Footer = ({ size = "medium", styles, ...props }) => (
  <footer {...css(styles.footer, styles[size])} {...props}>
    <ul>
      <li>
        <a {...css(styles.link)}>About</a>
      </li>
      <li>
        <a {...css(styles.link)}>Press</a>
      </li>
      <li>
        <a {...css(styles.link)}>Developers</a>
      </li>
      <li>
        <a {...css(styles.link)}>Channels</a>
      </li>
    </ul>
  </footer>
);

export default withStyles(({ themes, text }) => {
  return {
    footer: {
      padding: "12px"
    },

    link: {
      padding: "14px"
    },

    /* Color */
    default: themes.default,
    primary: themes.primary,
    secondary: themes.secondary,

    /* Size */
    small: text.small,
    medium: text.medium,
    large: text.large
  };
})(Footer);
