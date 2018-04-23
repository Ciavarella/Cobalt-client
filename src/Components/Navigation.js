import React from "react";
import { Link } from "react-router-dom";
import { css, withStyles } from "../withStyles";

import FlexContainer from "../Containers/FlexContainer";
import List from "../Elements/List";
import Icon from "../Elements/Icon";
import ListItem from "../Elements/ListItem";
import Heading from "../Elements/Heading";

const Navigation = ({ styles, match, ...props }) => {
  return (
    <aside {...css(styles.sidebar)}>
      <div {...css(styles.logoArea)}>
        <Link to={`${match.url}`}>
          <Heading {...css(styles.logo)} size="2">
            Feed<span>.io</span>
          </Heading>
        </Link>
      </div>
      <span {...css(styles.divider)} />
      <FlexContainer align="start">
        <ul {...css(styles.dashboardNav)}>
          <Link to={`${match.url}`}>
            <li>
              <Icon fillColor="danger" icon="fas fa-columns" />Dashboard
            </li>
          </Link>
          <Link to={`${match.url}/new`}>
            <li>
              <Icon fillColor="dawn" icon="fas fa-plus" />New session
            </li>
          </Link>
          <Link to={`${match.url}/profile`}>
            <li>
              <Icon fillColor="dawn" icon="fas fa-user" />My profile
            </li>
          </Link>
          <Link to={`${match.url}/upgrade`}>
            <li>
              <Icon fillColor="dawn" icon="fas fa-tag" />Upgrade plan
            </li>
          </Link>
          <Link to={`${match.url}/settings`}>
            <li>
              <Icon fillColor="dawn" icon="fas fa-cog" />Settings
            </li>
          </Link>
          <Link to={`/auth/logout`}>
            <li>
              <Icon fillColor="dawn" icon="fas fa-power-off" />Log out
            </li>
          </Link>
        </ul>
      </FlexContainer>
      <ul {...css(styles.footer)}>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Github</a>
        </li>
        <li>
          <a href="#">Developers</a>
        </li>
        <li>
          <a href="#">Chas Academy</a>
        </li>
      </ul>
    </aside>
  );
};

export default withStyles(({ themes, text, colors }) => {
  return {
    sidebar: {
      display: "flex",
      flex: "1",
      flexDirection: "column",
      backgroundColor: colors.carbon,
      color: colors.dawn,
      minHeight: "100vh",
      maxWidth: "240px"
    },
    logoArea: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100px",
      padding: "24px",
      ":nth-child(1n) span": {
        color: colors.danger
      }
    },
    logo: {
      marginBottom: 0,
      color: "white"
    },
    divider: {
      display: "block",
      height: "1px",
      width: "100%",
      backgroundColor: colors.dawn
    },
    dashboardNav: {
      marginTop: "45px",
      ":nth-child(1n) li": {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "10px",
        transition: "color 0.3s ease",
        position: "relative",
        ":hover": {
          color: "#FFF",
          cursor: "pointer"
        },
        ":hover::before": {
          content: '""',
          width: "6px",
          height: "100%",
          backgroundColor: colors.danger,
          left: "0",
          top: "0",
          position: "absolute"
        }
      },
      ":nth-child(1n) li span": {
        padding: "6px 12px !important"
      }
    },
    footer: {
      display: "flex",
      justifyContent: "center",
      margin: "auto auto 24px auto",
      maxWidth: "160px",
      flexWrap: "wrap",
      ":nth-child(1n) li a": {
        color: colors.dawn,
        fontSize: "10px",
        marginRight: "10px",
        ":hover": {
          color: "#FFF",
          cursor: "pointer"
        }
      }
    }
  };
})(Navigation);
