import React from "react";
import { css, withStyles } from "../../withStyles";
import FlexContainer from "../../Containers/FlexContainer";
import Icon from "../../Elements/Icon";
import Heading from "../../Elements/Heading";

const Upgrade = ({ styles, ...props }) => {
  return (
    <div {...css(styles.upgrade)}>
      <FlexContainer justify="center" align="center">
        <Icon icon="fas fa-tag" />
        <Heading size="2">Upgrade</Heading>
      </FlexContainer>
    </div>
  );
};

export default withStyles(({ colors }) => {
  return {
    upgrade: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  };
})(Upgrade);
