import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { css, withStyles } from "../../withStyles";
import FlexContainer from "../../Containers/FlexContainer";
import Paragraph from "../../Elements/Paragraph";
import Icon from "../../Elements/Icon";
import Avatar from "../../Elements/Avatar";
import Heading from "../../Elements/Heading";
import Button from "../../Elements/Button";
import Navigation from "../../Components/Navigation";
import Sessions from "./Sessions";
import Upgrade from "./Upgrade";
import Profile from "./Profile";
import Settings from "./Settings";

import openBoxIcon from "../../assets/open-box.svg";

const Dashboard = ({ styles, ...props }) => {
  let path = props.location.pathname.slice(11);
  return (
    <div {...css(styles.dashboard)}>
      <Navigation {...props} />
      <div {...css(styles.main)}>
        <div {...css(styles.header)}>
          <FlexContainer direction="row" align="center" justify="between">
            <Heading size="2" style={{ margin: "0" }}>
              {path == "profile"
                ? "Profile Settings"
                : path == "new"
                  ? "New Session"
                  : path == "upgrade"
                    ? "Upgrade Plan"
                    : path == "settings"
                      ? "Settings"
                      : "Dashboard"}
            </Heading>
            <FlexContainer direction="row" align="center" justify="end">
              <Button appearance="secondary">New session</Button>
              <Avatar
                size="medium"
                image="https://avatars1.githubusercontent.com/u/24225542?s=460&v=4"
              />
            </FlexContainer>
          </FlexContainer>
        </div>
        <Switch location={props.location}>
          <Route exact path={`${props.match.url}`} component={Sessions} />
          <Route exact path={`${props.match.url}/new`} component={Sessions} />
          <Route
            exact
            path={`${props.match.url}/profile`}
            component={Profile}
          />
          <Route
            exact
            path={`${props.match.url}/upgrade`}
            component={Upgrade}
          />
          <Route
            exact
            path={`${props.match.url}/settings`}
            component={Settings}
          />
        </Switch>
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
      padding: "15px",
      backgroundColor: "white",
      borderBottom: `1px solid ${colors.aluminum}`
    },
    main: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      flex: "2",
      backgroundColor: colors.sand
    }
  };
})(Dashboard);
