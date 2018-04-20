import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import NotFound from "../Views/NotFound";
import SocketClient from "../Views/Client";
import LoginForm from "../Components/LoginForm";
import withPublicRoot from "../Containers/PublicRoot";
import LandingPage from "../Views/LandingPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={withPublicRoot(LandingPage)} />
          <Route exact path="/login" component={withPublicRoot(LoginForm)} />
          <Route path="*" component={NotFound} />
        </Switch>
            <Route path="/:sessionId" component={SocketClient} />
      </div>
    );
  }
}

export default App;
