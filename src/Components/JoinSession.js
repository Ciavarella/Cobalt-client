import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";
import Button from "../Elements/Button";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import Input from "../Elements/Input";

class JoinSession extends React.Component {
  constructor({ styles, ...props }) {
    super(props);
    this.state = {
      code: "",
      fireRedirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    this.setState({ fireRedirect: true });
    /** TODO: Handle submit here
     *  use "this.state.code" to get the code
     *
     */
  }

  handleChange(e) {
    this.setState({ code: e.target.value });
  }

  render() {
    const { fireRedirect } = this.state;

    if (fireRedirect) {
      return <Redirect to={`/session/${this.state.code}`} />;
    }

    return (
      <FlexContainer>
        <Heading size="1" appearance="white">
          Have a unique code?
        </Heading>
        <Heading size="2" appearance="white">
          Paste it here to enter your session!
        </Heading>
        <form onSubmit={this.handleSubmit}>
          <FlexContainer direction="row">
            <span {...css(this.props.styles.inputPrefix)}>
              http://feedback.io/
            </span>
            <Input
              name="code"
              type="text"
              placeholder="Session code..."
              value={this.state.code}
              onChange={this.handleChange}
              style={{
                marginLeft: "0px",
                width: "400px",
                borderRadius: "0px 4px 4px 0px"
              }}
            />
            <Button appearance="secondary" type="submit">
              JOIN
            </Button>
          </FlexContainer>
        </form>
      </FlexContainer>
    );
  }
}

export default withStyles(({ themes, text, colors }) => {
  return {
    JoinSession: {},
    inputPrefix: {
      backgroundColor: colors.secondary,
      color: "white",
      height: "40px",
      display: "flex",
      alignItems: "center",
      padding: "16px",
      fontWeight: "600",
      borderRadius: "4px 0px 0px 4px"
    }
  };
})(JoinSession);
