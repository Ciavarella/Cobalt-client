import React from "react";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";
import Button from "../Elements/Button";
import List from "../Elements/List";
import ListItem from "../Elements/ListItem";
import Heading from "../Elements/Heading";

const Header = ({ styles, ...props }) => (
  <header {...css(styles.header)} {...props}>
    <FlexContainer direction="row" position="spaceBetween">
      <FlexContainer direction="row">
        <Heading style={{ margin: "0" }} size="2">
          Feed.io
        </Heading>
      </FlexContainer>

      <FlexContainer direction="row" position="spaceBetween">
        <List direction="row" style={{ width: "350px" }}>
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
