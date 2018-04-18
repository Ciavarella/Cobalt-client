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

  return (
    <div>
      <FlexContainer direction="row">
        <Input
          ref={nodeRef => (textInput = nodeRef)}
          onClick={copyToClipboard}
          value={url}
          readOnly
        />
        <Button appearance="primary" onClick={copyToClipboard}>
          Copy
        </Button>
      </FlexContainer>
    </div>
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
