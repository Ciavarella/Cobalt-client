import React from "react";
import { css, withStyles } from "../withStyles";
import { Link } from "react-router-dom";
import Media from "react-media";

import FlexContainer from "../Containers/FlexContainer";
import List from "../Elements/List";
import ListItem from "../Elements/ListItem";

const Footer = ({ size = "medium", styles, ...props }) => (
  <footer {...css(styles.footer, styles[size])} {...props}>
    <Media query={{ maxWidth: 480 }}>
      {matches =>
        matches ? (
          <FlexContainer direction="row" justify="start" flex="1">
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
        ) : (
          <FlexContainer direction="column" align="start">
            <List direction="row">
              <ListItem>
                <Link to="about">About</Link>
              </ListItem>
              <ListItem>
                <Link to="press">Press</Link>
              </ListItem>
              <ListItem>
                <Link to="developers">Developers</Link>
              </ListItem>
              <ListItem>
                <Link to="channels">Channels</Link>
              </ListItem>
            </List>
          </FlexContainer>
        )
      }
    </Media>
  </footer>
);

export default withStyles(({ themes, text }) => {
  return {
    footer: {
      padding: "20px",
      color: "#FFF",
      zIndex: "99",
      ":nth-child(1n) a": {
        marginRight: "20px",
        fontSize: "10px"
      }
    }
  };
})(Footer);
