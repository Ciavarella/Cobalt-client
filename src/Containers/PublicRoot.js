import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { verifyAuth } from "../redux/auth/actions";

import { connect } from "react-redux";

let withPublicRoot = ComposedComponent => {
  class PublicRoot extends React.Component {
    componentWillMount() {
      this.props.dispatch(verifyAuth());
    }
    render() {
      return (
        <React.Fragment>
          <Header {...this.props} />
          <main className="App-content">
            <ComposedComponent />
          </main>
          <Footer />
        </React.Fragment>
      );
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    success: state.signup.success
  });

  return connect(mapStateToProps)(PublicRoot);
};

export default withPublicRoot;
