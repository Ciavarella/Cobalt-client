import React, { Component } from "react";
import { css, withStyles } from "../withStyles";

import Notification from "../Elements/Notification";
import FlexContainer from "../Containers/FlexContainer";

const mockNotifications = [];

class Notifications extends Component {
  constructor({ styles, ...props }) {
    super(props);
    this.styles = styles;
    this.state = {
      notifications: mockNotifications
    };
    let id = 0;
    let adder = setInterval(() => {
      id++;
      let newNotification = {
        _id: id,
        text: `Some text here ${id}`
      };
      mockNotifications.push(newNotification);
      this.updateMock();
    }, 4000);

    this.handleClick = this.handleClick.bind(this);
  }

  updateMock() {
    this.setState({
      notification: mockNotifications
    });
  }

  clear(e) {
    clearInterval(adder);
  }

  handleClick(e) {
    mockNotifications.map((notification, i) => {
      if (notification._id == e.target.id) {
        mockNotifications.splice(i, 1);
      }
    });
    this.updateMock();
  }

  render() {
    return (
      <div {...css(this.styles.notifications)}>
        {this.state.notifications.map(notification => {
          return (
            <Notification
              id={notification._id}
              key={notification._id}
              handleClick={this.handleClick}
            >
              {notification.text}
            </Notification>
          );
        })}
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
