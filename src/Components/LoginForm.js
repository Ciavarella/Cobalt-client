import React, { Component } from "react";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";
import Button from "../Elements/Button";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import InputWithIcon from "../Elements/InputWithIcon";

class LoginForm extends React.Component {
  constructor({ styles, ...props }) {
    super(props);
    this.styles = styles;
    this.state = {
      email: "",
      password: "",
      btnDisabled: false //This can be used for disabling button until email/password is a certain length
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(
      `Email::: ${this.state.email}, Password::: ${this.state.password}`
    );
    //Todo: On submit send both email and password for validation
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div {...css(this.styles, this.styles.loginForm)}>
        <FlexContainer>
          <Heading size="2">Log in as presenter</Heading>
          <form onSubmit={this.handleSubmit}>
            <FlexContainer>
              <FlexContainer align="start" style={{ width: "400px" }}>
                <label style={{ marginBottom: "5px" }} for="email">
                  Email
                </label>
                <InputWithIcon
                  name="email"
                  icon="fas fa-check"
                  iconPosition="right"
                  iconBackground="primary"
                  iconFillColor="white"
                  type="text"
                  placeholder="Email..."
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <label
                  for="password"
                  style={{ marginTop: "20px", marginBottom: "5px" }}
                >
                  Password
                </label>
                <InputWithIcon
                  name="password"
                  icon="fas fa-check"
                  iconPosition="right"
                  iconBackground="primary"
                  iconFillColor="white"
                  type="text"
                  placeholder="Password..."
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FlexContainer>
              {this.state.btnDisabled ? (
                <Button disabled>Log In</Button>
              ) : (
                <Button>Log In</Button>
              )}
            </FlexContainer>
          </form>
          <Paragraph>
            Don't have an account? <a href="#">Sign up here!</a>
          </Paragraph>
        </FlexContainer>
      </div>
    );
  }
}

export default withStyles(({ themes, text, colors }) => {
  return {
    loginForm: {
      ":nth-child(1n) form input": {
        margin: "0px"
      }
    },
    primary: colors.primary,
    danger: colors.danger
  };
})(LoginForm);
