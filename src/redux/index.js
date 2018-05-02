import { combineReducers } from "redux";

import auth from "./auth/authReducer";
import session from "./session/sessionReducer";
import signup from "./signup/signupReducer";

const feedbackApp = combineReducers({
  auth,
  session,
  signup
});

export default feedbackApp;
