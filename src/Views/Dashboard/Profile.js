import React from "react";
import { css, withStyles } from "../../withStyles";
import Profile from "../../Components/Profile";

const ProfileView = ({ styles, ...props }) => {
  return (
    <div {...css(styles.Profile)}>
      <Profile />
    </div>
  );
};

export default withStyles(({ colors }) => {
  return {
    Profile: {
      display: "flex",
      flexWrap: "wrap",
      height: "100%"
    }
  };
})(ProfileView);
