import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { connect } from "react-redux";

let withPublicRoot = ComposedComponent => {
  class PublicRoot extends React.Component {
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
    isAuthenticated: state.auth.isAuthenticated
  });

  return connect(mapStateToProps)(PublicRoot);
};

export default withPublicRoot;
