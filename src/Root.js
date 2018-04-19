import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./Containers/App";

/* Redux Store & Thunk */
const reducers = [];
const middleware = [thunk];

/* Uncomment when first reducer has been created 
const store = createStore(reducers, applyMiddleware(...middleware));
*/

const Root = () => {
  return (
    <Provider store={{}}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  );
};

export default Root;
