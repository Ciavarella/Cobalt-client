import { combineReducers } from "redux";

import auth from "./auth/authReducer";

const feedbackApp = combineReducers({
  auth
});

export default feedbackApp;
