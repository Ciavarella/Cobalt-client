import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const withPublicRoot = ComposedComponent => {
  return class PublicRoot extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Header />
          <main className="App-content">
            <ComposedComponent />
          </main>
          <Footer />
        </React.Fragment>
      );
    }
  };
};

export default withPublicRoot;
