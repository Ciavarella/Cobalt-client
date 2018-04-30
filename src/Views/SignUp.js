import React from "react";
import { css, withStyles } from "../withStyles";

import SignUpForm from "../Components/SignUpForm";
import FlexContainer from "../Containers/FlexContainer";

const SignUp = ({ styles, ...props }) => {
  return (
    <div {...css(styles.signUp)}>
      <FlexContainer align="center" justify="center" style={{ width: "100%" }}>
        <SignUpForm />
      </FlexContainer>
    </div>
  );
};

export default withStyles(({ colors, gradients }) => {
  return {
    signUp: {
      display: "flex",
      height: "100%",
      width: "100%",
      position: "absolute",
      background: gradients.carbon
    },
    icon: {
      width: "128px",
      marginBottom: "48px"
    }
  };
})(SignUp);
