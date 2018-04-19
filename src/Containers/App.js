import React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "../Views/NotFound";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
