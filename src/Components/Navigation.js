import React from "react";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";
import List from "../Elements/List";
import ListItem from "../Elements/ListItem";
import Heading from "../Elements/Heading";

const Navigation = ({ styles, ...props }) => (
  <FlexContainer>
    <Heading size="1">Testing</Heading>
  </FlexContainer>
);

export default withStyles(({ themes, text }) => {
  return {
    navigation: {
      backgroundColor: "black"
    }
  };
})(Navigation);
