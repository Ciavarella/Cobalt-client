import React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "../Views/NotFound";
import SocketClient from "../Views/Client";
import LiveSessionHost from "../Views/LiveSessionHost/LiveSessionHost";
import Lobby from "../Views/LiveSessionHost/Lobby";
import Dashboard from "../Views/Dashboard/Dashboard";
import Login from "../Views/Login";
import LandingPage from "../Views/LandingPage";
import CreateSession from "../Views/CreateSession";
import SignUp from "../Views/SignUp";

/* HOC */
import withSocket from "../Components/WithSocket";
import requireAuth from "../Components/RequireAuth";
import withPublicRoot from "../Containers/PublicRoot";

class App extends React.Component {
  constructor() {
    super();
    this.LandingPage = withPublicRoot(LandingPage);
    this.Login = withPublicRoot(Login);
    this.SignUp = withPublicRoot(SignUp);
    {
      /* THIS SHOULD BE PROTECTED */
    }
    // this.CreateSession = requireAuth(CreateSession);
    this.CreateSession = CreateSession;

    this.LiveSessionHost = requireAuth(LiveSessionHost);
    this.Dashboard = requireAuth(Dashboard);
    this.Lobby = requireAuth(Lobby);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={this.LandingPage} />
          <Route exact path="/login" component={this.Login} />
          <Route exact path="/createsession" component={CreateSession} />
          <Route exact path="/signup" component={this.SignUp} />
          <Route path="/session/:sessionId" component={SocketClient} />
          <Route path="/host/:sessionId" component={this.LiveSessionHost} />
          <Route path="/lobby" component={this.Lobby} />
          <Route path="/dashboard" component={this.Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
