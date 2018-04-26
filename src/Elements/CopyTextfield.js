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
    <div {...css(styles.textfield)} {...props}>
      <FlexContainer direction="row">
        <Button appearance="primary" onClick={copyToClipboard}>
          Copy
        </Button>
        <Input
          ref={nodeRef => (textInput = nodeRef)}
          onClick={copyToClipboard}
          value={url}
          readOnly
        />
      </FlexContainer>
    </div>
  );
};

export default withStyles(({ themes }) => {
  return {
    textfield: {
      ":nth-child(1n) button": {
        marginRight: "0",
        height: "43px",
        borderRadius: "4px 0px 0px 4px"
      },
      ":nth-child(1n) input": {
        marginLeft: "0",
        borderRadius: "0px 4px 4px 0px"
      }
    },

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
