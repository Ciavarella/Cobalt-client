import React, { Component } from "react";
import { css, withStyles } from "../withStyles";
import { CSSTransitionGroup } from "react-transition-group";

import Notification from "../Elements/Notification";
import FlexContainer from "../Containers/FlexContainer";

class Notifications extends Component {
  constructor({ styles, position = "bottomRight", ...props }) {
    super(props);
    this.styles = styles;
    this.position = position;

    this.removeNotification;
  }

  componentWillReceiveProps() {
    // console.log("props recieved");
  }

  componentWillUnmount() {
    // clearInterval(this.removeNotification);
    console.log(this.props.notifications);
  }

  render() {
    this.props.notifications.length
      ? (this.removeNotification = setInterval(() => {
          this.props.removeNotifications();
        }, 1000))
      : clearInterval(this.removeNotification);
    return (
      <div {...css(this.styles.notifications, this.styles[this.position])}>
        <CSSTransitionGroup
          transitionName="notification"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {Object.values(this.props.notifications).map(notification => {
            return (
              <Notification
                appearance="danger"
                id={notification}
                key={notification}
                handleClick={this.props.handleClick}
              >
                {notification.body}
              </Notification>
            );
          })}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default withStyles(({ themes }) => {
  return {
    notifications: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      width: "30%",
      zIndex: "199",
      ":nth-child(1n) div": {
        marginBottom: "15px"
      }
    },
    /* Position */
    bottomRight: {
      bottom: "2.5rem",
      right: "2.5rem"
    },
    bottomLeft: {
      bottom: "2.5rem",
      left: "2.5rem"
    }
  };
})(Notifications);
