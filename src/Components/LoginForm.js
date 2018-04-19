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
  }

  render() {
    return (
      <div>
        <FlexContainer>
          <Heading size="2">Log in as presenter</Heading>
          <FlexContainer align="start" style={{ width: "400px" }}>
            <label style={{ marginBottom: "5px" }} for="email">
              Email
            </label>
            <InputWithIcon
              name="email"
              appearance="primary"
              icon={<i class="fas fa-check" />}
              iconPosition="right"
              iconAppearance="primary"
              type="text"
              placeholder="Email..."
            />
            <label
              for="password"
              style={{ marginTop: "20px", marginBottom: "5px" }}
            >
              Password
            </label>
            <InputWithIcon
              name="password"
              appearance="primary"
              icon={<i class="fas fa-check" />}
              iconPosition="right"
              iconAppearance="primary"
              type="text"
              placeholder="Password..."
            />
          </FlexContainer>
          <Button>Log In</Button>
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
    loginForm: {},
    primary: colors.primary,
    danger: colors.danger
  };
})(LoginForm);
