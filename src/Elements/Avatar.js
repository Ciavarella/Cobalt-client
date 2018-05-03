import React from "react";
import { css, withStyles } from "../withStyles";

const Avatar = ({
  styles,
  image = null,
  size = "small",
  children,
  ...props
}) => (
  <span {...css(styles.avatar, styles[size])} {...props}>
    {image && <img {...css(styles.image)} src={image} alt="Avatar" />}
    {children}
  </span>
);

export default withStyles(({ themes }) => {
  return {
    avatar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",

      /* could be made dynamic */
      backgroundColor: themes.primary.backgroundColor,
      color: themes.primary.color
    },

    /* Image */
    image: {
      display: "block",
      borderRadius: "50%",
      height: "100%",
      width: "100%",
      objectFit: "cover",
      userDrag: "none"
    },

    /* Size */
    small: { width: "3.2rem", height: "3.2rem" },
    medium: { width: "4.8rem", height: "4.8rem" },
    large: { width: "6.4rem", height: "6.4rem" }
  };
})(Avatar);
