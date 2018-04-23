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
        <Heading {...css(styles.logo)} size="2">
          Feed<span>.io</span>
        </Heading>
      </FlexContainer>

      <FlexContainer direction="row" justify="end" flex="1">
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
        <Button appearance="secondary">Log in</Button>
        <Button appearance="primary">Sign up</Button>
      </FlexContainer>
    </FlexContainer>
  </header>
);

export default withStyles(({ themes, colors }) => {
  return {
    header: {
      padding: "20px",
      width: "100%",
      position: "absolute",
      zIndex: 999,
      background: "transparent",
      ":nth-child(1n) a": {
        color: "#FFF",
        fontSize: "12px",
        fontWeight: "600",
        ":hover": {
          color: colors.dawn
        }
      }
    },
    logo: {
      color: "#FFF",
      ":nth-child(1n) span": {
        color: colors.danger
      }
    }
  };
})(Header);
