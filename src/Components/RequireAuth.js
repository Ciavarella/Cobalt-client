import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verifyAuth } from "../redux/auth/actions";
import Loader from "../Elements/Loader";

const requireAuth = ComposedComponent => {
  class Authentication extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        return this.props.history.push("/login");
      }
    }

    componentWillMount() {
      this.props.dispatch(verifyAuth());
    }

    render() {
      const { isAuthenticated, isFetching } = this.props;

      if (isFetching) {
        return <Loader />;
      }

      if (isAuthenticated) {
        return <ComposedComponent {...this.props} />;
      }

      return <Redirect to="/login" />;
    }
  }

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      isFetching: state.auth.isFetching
    };
  };

  return connect(mapStateToProps)(Authentication);
};

export default requireAuth;
