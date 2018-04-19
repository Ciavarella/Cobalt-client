import React, { Component } from "react";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";
import Button from "../Elements/Button";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import InputWithIcon from "../Elements/InputWithIcon";

class SignUpForm extends React.Component {
  constructor({ styles, ...props }) {
    super(props);
    this.styles = styles;
    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Todo: Send for validation
    console.log(this.state.name, this.state.email, this.state.password);
  }

  render() {
    return (
      <div {...css(this.styles, this.styles.signUpForm)}>
        <FlexContainer>
          <Heading size="2">Sign up here</Heading>
          <form onSubmit={this.handleSubmit}>
            <FlexContainer>
              <FlexContainer align="start" style={{ width: "400px" }}>
                <label>Name</label>
                <InputWithIcon
                  name="name"
                  icon="fas fa-check"
                  iconPosition="right"
                  iconBackground="primary"
                  iconFillColor="white"
                  type="text"
                  placeholder="Name..."
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <label>Email</label>
                <InputWithIcon
                  name="email"
                  icon="fas fa-check"
                  iconPosition="right"
                  iconBackground="primary"
                  iconFillColor="white"
                  type="text"
                  placeholder="Email..."
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <label>Password</label>
                <InputWithIcon
                  name="password"
                  icon="fas fa-check"
                  iconPosition="right"
                  iconBackground="primary"
                  iconFillColor="white"
                  type="password"
                  placeholder="Password..."
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </FlexContainer>
              <Button>Sign Up</Button>
            </FlexContainer>
          </form>
          <Paragraph>
            Already have an account? <a href="#">Log in here!</a>
          </Paragraph>
        </FlexContainer>
      </div>
    );
  }
}

export default withStyles(({ themes, text, colors }) => {
  return {
    signUpForm: {
      ":nth-child(1n) form input": {
        margin: "0"
      },
      ":nth-child(1n) label": {
        marginTop: "20px",
        marginBottom: "5px"
      }
    },
    primary: colors.primary,
    danger: colors.danger,
    success: colors.success
  };
})(SignUpForm);
