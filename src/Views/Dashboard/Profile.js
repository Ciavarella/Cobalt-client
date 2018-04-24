import React from "react";
import { css, withStyles } from "../../withStyles";
import FlexContainer from "../../Containers/FlexContainer";
import Icon from "../../Elements/Icon";
import Heading from "../../Elements/Heading";

const Profile = ({ styles, ...props }) => {
  return (
    <div {...css(styles.Profile)}>
      <FlexContainer justify="center" align="center">
        <Icon icon="fas fa-user" fillColor="dawn" />
        <Heading size="2">Profile</Heading>
      </FlexContainer>
    </div>
  );
};

export default withStyles(({ colors }) => {
  return {
    Profile: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  };
})(Profile);
