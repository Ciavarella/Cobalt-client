import React from "react";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";
import Button from "../Elements/Button";
import List from "../Elements/List";
import ListItem from "../Elements/ListItem";
import Heading from "../Elements/Heading";

const Header = ({ styles, ...props }) => (
  <header {...css(styles.header)} {...props}>
    <FlexContainer direction="row" justify="between">
      <FlexContainer direction="row" justify="start" flex="1">
        <Heading style={{ margin: "0" }} size="2">
          Feed.io
        </Heading>
      </FlexContainer>

      <FlexContainer direction="row" justify="between" flex="1">
        <List direction="row">
          <ListItem>
            <a href="#">About</a>
          </ListItem>
          <ListItem>
            <a href="#">Tour</a>
          </ListItem>
          <ListItem>
            <a href="#">Pricing</a>
          </ListItem>
          <ListItem>
            <a href="#">Contact</a>
          </ListItem>
        </List>
      </FlexContainer>
      <FlexContainer direction="row">
        <Button>Log in</Button>
        <Button>Sign up</Button>
      </FlexContainer>
    </FlexContainer>
  </header>
);

export default withStyles(({ themes, text }) => {
  return {
    header: {}
  };
})(Header);
