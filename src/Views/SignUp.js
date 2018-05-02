import React from "react";
import { css, withStyles } from "../withStyles";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import SignUpForm from "../Components/SignUpForm";
import FlexContainer from "../Containers/FlexContainer";

import { requestSignup } from "../redux/signup/actions";

let SignUp = ({ styles, dispatch, ...props }) => {
  const signupRequest = data => {
    dispatch(requestSignup(data));
  };

  if (props.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div {...css(styles.signUp)}>
      <FlexContainer align="center" justify="center" style={{ width: "100%" }}>
        <SignUpForm signupRequest={signupRequest} />
      </FlexContainer>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

/* Redux Connect */
SignUp = connect(mapStateToProps)(SignUp);

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
