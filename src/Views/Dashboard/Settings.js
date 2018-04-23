import React from "react";
import { css, withStyles } from "../../withStyles";
import FlexContainer from "../../Containers/FlexContainer";
import Icon from "../../Elements/Icon";
import Heading from "../../Elements/Heading";

const Settings = ({ styles, ...props }) => {
  return (
    <div {...css(styles.Settings)}>
      <FlexContainer justify="center" align="center">
        <Icon icon="fas fa-tag" />
        <Heading size="2">Settings</Heading>
      </FlexContainer>
    </div>
  );
};

export default withStyles(({ colors }) => {
  return {
    Settings: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  };
})(Settings);
