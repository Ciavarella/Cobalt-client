import React from "react";
import { css, withStyles } from "../withStyles";
import FlexContainer from "../Containers/FlexContainer";
import List from "../Elements/List";
import ListItem from "../Elements/ListItem";

const Footer = ({ size = "medium", styles, ...props }) => (
  <footer {...css(styles.footer, styles[size])} {...props}>
    <FlexContainer direction="column" align="start">
      <List direction="row">
        <ListItem>
          <a href="/">About</a>
        </ListItem>
        <ListItem>
          <a href="/">Press</a>
        </ListItem>
        <ListItem>
          <a href="/">Developers</a>
        </ListItem>
        <ListItem>
          <a href="/">Channels</a>
        </ListItem>
      </List>
    </FlexContainer>
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
