import { combineReducers } from "redux";

import auth from "./auth/authReducer";
import session from "./session/sessionReducer";

const feedbackApp = combineReducers({
  auth,
  session
});

export default feedbackApp;
