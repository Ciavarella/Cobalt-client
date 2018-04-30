import React from "react";
import { css, withStyles } from "../withStyles";
import { Link } from "react-router-dom";

import FlexContainer from "../Containers/FlexContainer";
import Button from "../Elements/Button";
import ButtonLink from "../Elements/ButtonLink";
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
            <Link to="about">About</Link>
          </ListItem>
          <ListItem>
            <Link to="tour">Tour</Link>
          </ListItem>
          <ListItem>
            <Link to="pricing">Pricing</Link>
          </ListItem>
          <ListItem>
            <Link to="contact">Contact</Link>
          </ListItem>
        </List>
      </FlexContainer>
      <FlexContainer direction="row">
        {/*<Link to="login">
          <Button appearance="secondary">Log in</Button>
</Link>*/}
        <ButtonLink to="login" appearance="secondary">
          LOG IN
        </ButtonLink>
        {/*<Link to="signup">
          <Button appearance="primary">Sign up</Button>
</Link>*/}
        <ButtonLink to="signup" appearance="primary">
          SIGN UP
        </ButtonLink>
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
