import React from "react";
import { css, withStyles } from "../withStyles";
import FlexContainer from "../Containers/FlexContainer";
import Paragraph from "../Elements/Paragraph";
import Icon from "../Elements/Icon";
import Avatar from "../Elements/Avatar";
import Heading from "../Elements/Heading";
import Button from "../Elements/Button";
import Navigation from "../Components/Navigation";

import openBoxIcon from "../assets/open-box.svg";

const Dashboard = ({ styles, ...props }) => {
  return (
    <div {...css(styles.dashboard)}>
      <Navigation />
      <div {...css(styles.main)}>
        <div {...css(styles.header)}>
          <FlexContainer direction="row" align="center" justify="end">
            <Button appearance="secondary">
              <Icon icon="fas fa-plus" />New session
            </Button>
            <Heading sise="3">Manchildman</Heading>
            <Avatar size="medium" />
          </FlexContainer>
        </div>
        <FlexContainer justify="center" align="center">
          <img {...css(styles.icon)} src={openBoxIcon} alt="Empty Box" />
          <Heading size="2">You don't have any sessions saved</Heading>
          <Paragraph>Empty</Paragraph>
          <Button appearance="primaryGradient">Host your first session!</Button>
        </FlexContainer>
      </div>
    </div>
  );
};

export default withStyles(({ colors }) => {
  return {
    dashboard: {
      display: "flex",
      flexDirection: "row"
    },
    icon: {
      width: "128px",
      marginBottom: "48px"
    },
    header: {
      width: "100%",
      height: "100%",
      padding: "15px",
      borderBottom: `1px solid ${colors.aluminum}`
    },
    main: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      flex: "2"
    }
  };
})(Dashboard);
