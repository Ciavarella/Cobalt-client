import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import requireAuth from "../Components/RequireAuth";

import NotFound from "../Views/NotFound";
import SocketClient from "../Views/Client";
import LiveSessionHost from "../Views/LiveSessionHost/LiveSessionHost";
import Lobby from "../Views/LiveSessionHost/Lobby";
import Dashboard from "../Views/Dashboard/Dashboard";
import Login from "../Views/Login";
import withPublicRoot from "../Containers/PublicRoot";
import LandingPage from "../Views/LandingPage";
import CreateSession from "../Views/CreateSession";
import SignUp from "../Views/SignUp";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={withPublicRoot(LandingPage)} />
          <Route exact path="/login" component={withPublicRoot(Login)} />
          <Route
            exact
            path="/createsession"
            component={withPublicRoot(CreateSession)}
          />
          <Route exact path="/signup" component={withPublicRoot(SignUp)} />
          <Route path="/session/:sessionId" component={SocketClient} />
          <Route path="/host/:sessionId" component={LiveSessionHost} />
          <Route path="/lobby" component={Lobby} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
