import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { Loader } from "../";

const requireAuth = ComposedComponent => {
  class Authentication extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        return this.props.history.push("/login");
      }
    }

    render() {
      const { isAuthenticated } = this.props;

      /* When loader component is ready */
      // if (isFetching) {
      //   return <Loader />;
      // }

      if (isAuthenticated) {
        return <ComposedComponent {...this.props} />;
      }
      console.log("You are not authenticated");
      return <Redirect to="/login" />;
    }
  }

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  };

  return connect(mapStateToProps)(Authentication);
};

export default requireAuth;
