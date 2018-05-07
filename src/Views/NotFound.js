import React from "react";
import { css, withStyles } from "../withStyles";
import FlexContainer from "../Containers/FlexContainer";
import Heading from "../Elements/Heading";
import Paragraph from "../Elements/Paragraph";
import Button from "../Elements/Button";

import openBoxIcon from "../assets/open-box.svg";

const NotFound = ({ styles, ...props }) => {
  return (
    <div {...css(styles.notFound)}>
      <FlexContainer>
        <img {...css(styles.icon)} src={openBoxIcon} alt="Empty Box" />
        <Heading size="2">404 page not found</Heading>
        <Paragraph>
          We are sorry but the page: "{props.location.pathname.replace("/", "")}"
          could not be found
        </Paragraph>
        <Button onClick={() => props.history.go(-1)} appearance="primary">
          Click here to go back
        </Button>
      </FlexContainer>
    </div>
  );
};

export default withStyles(({ colors }) => {
  return {
    notFound: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: colors.sand
    },
    icon: {
      width: "128px",
      marginBottom: "48px"
    }
  };
})(NotFound);
