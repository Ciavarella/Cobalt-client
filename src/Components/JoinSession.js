import React, { Component } from "react";
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
      code: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {}

  handleChange(e) {
    this.setState({ code: e.target.value });
  }

  render() {
    return (
      <FlexContainer>
        <Heading size="2">Have a unique code?</Heading>
        <Heading size="3">Paste it here to enter your session!</Heading>
        <form action="">
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
            <Button appearance="primary">JOIN</Button>
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
      backgroundColor: colors.primary,
      height: "40px",
      display: "flex",
      alignItems: "center",
      padding: "12px 4px 12px 12px",
      borderRadius: "4px 0px 0px 4px"
    }
  };
})(JoinSession);
