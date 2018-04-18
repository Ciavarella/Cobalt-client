import React from "react";
import ReactDOM from "react-dom";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";
import Button from "./Button";
import Input from "./Input";

const CopyTextfield = ({ url = "Url should go here", styles, ...props }) => {
  let textInput;

  const copyToClipboard = event => {
    event.preventDefault();

    textInput = ReactDOM.findDOMNode(textInput);
    textInput.select();

    document.execCommand("copy");
  };
  /** TODO **/
  /** Inline style does not look good, need to refactor Button & Input components or this component **/
  return (
    <FlexContainer direction="row">
      <Button
        style={{ marginRight: "0", height: "40px" }}
        appearance="primary"
        onClick={copyToClipboard}
      >
        Copy
      </Button>
      <Input
        style={{ marginLeft: "0" }}
        ref={nodeRef => (textInput = nodeRef)}
        onClick={copyToClipboard}
        value={url}
        readOnly
      />
    </FlexContainer>
  );
};

export default withStyles(({ themes }) => {
  return {
    textfield: {},

    default: {
      color: themes.default.color
    },
    primary: {
      color: themes.primary.backgroundColor
    },
    secondary: {
      color: themes.secondary.color
    }
  };
})(CopyTextfield);
