import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import NotFound from "../Views/NotFound";
import SocketClient from "../Views/Client";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-content">
          <Switch>
            <Route exact path="/" />
            <Route path="/:sessionId" component={SocketClient} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
