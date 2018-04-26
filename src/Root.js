import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./Containers/App";

import feedbackApp from "../src/redux";

/* Redux Store & Thunk */
const reducers = feedbackApp;
const middleware = [thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  );
};

export default Root;
