import React from "react";
import { css, withStyles } from "../withStyles";
import FlexContainer from "../Containers/FlexContainer"; // See if this is needed.
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LoginForm from "../Components/LoginForm";

const Login = ({ styles, ...props }) => {
  return (
    <div>
      <Header />
      <FlexContainer {...css(styles.login)}>
        <LoginForm />
        <Footer {...css(styles.footer)} />
      </FlexContainer>
    </div>
  );
};

export default withStyles(({ colors }) => {
  return {
    login: {
      display: "flex",
      color: "white",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "grey",
      height: "100vh"
    },
    footer: {
      color: "white",
      position: "absolute",
      bottom: "0",
      width: "100vw",
      paddingBottom: "14px",
      paddingLeft: "14px"
    }
  };
})(Login);
