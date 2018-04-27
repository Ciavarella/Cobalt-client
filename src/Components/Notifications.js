import React, { Component } from "react";
import { css, withStyles } from "../withStyles";

import Notification from "../Elements/Notification";
import FlexContainer from "../Containers/FlexContainer";

let mockNotifications = [];

class Notifications extends Component {
  constructor({ styles, ...props }) {
    super(props);
    this.styles = styles;
    this.state = {
      notifications: mockNotifications,
      removedNotifications: []
    };
    /**Just to simulate notifications coming in */
    let id = 0;
    this.adder = setInterval(() => {
      id++;
      let newNotification = {
        _id: id,
        text: `Some text here ${id}`,
        notificationType: id % 2 == 0 ? "success" : "danger"
      };
      mockNotifications.push(newNotification);
      this.updateState();
    }, 2000);

    /**Removes notifications after some time and saves the removed ones on a different array */
    this.removeNotification = setInterval(() => {
      this.setState({
        ...this.state,
        removedNotifications: [
          ...this.state.removedNotifications,
          mockNotifications[0]
        ]
      });
      mockNotifications.shift();
      this.updateState();
    }, 5000);

    this.handleClick = this.handleClick.bind(this);
  }

  updateState() {
    this.setState({
      ...this.state,
      notifications: mockNotifications
    });
  }

  clear(e) {
    clearInterval(this.adder);
    clearInterval(this.removeNotification);
    console.log(this.state);
  }

  handleClick(e) {
    mockNotifications.map((notification, i) => {
      if (notification._id == e.target.id) {
        mockNotifications.splice(i, 1);
      }
    });
    this.updateState();
  }

  render() {
    return (
      <div {...css(this.styles.notifications)}>
        {this.state.notifications.map(notification => {
          return (
            <Notification
              appearance={notification.notificationType}
              id={notification._id}
              key={notification._id}
              handleClick={this.handleClick}
            >
              {notification.text}
            </Notification>
          );
        })}
        {/* Just to be able to clear the interval*/}
        <button style={{ color: "black" }} onClick={this.clear.bind(this)}>
          Stop
        </button>
      </div>
    );
  }
}

export default withStyles(({ themes }) => {
  return {
    notifications: {
      display: "flex",
      flexDirection: "column",
      ":nth-child(1n) div": {
        marginBottom: "15px"
      }
    }
  };
})(Notifications);
