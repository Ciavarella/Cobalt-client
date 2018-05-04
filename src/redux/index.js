import { combineReducers } from "redux";

import auth from "./auth/authReducer";
import session from "./session/sessionReducer";
import signup from "./signup/signupReducer";
import notifications from "./notifications/notificationsReducer";

const feedbackApp = combineReducers({
  auth,
  session,
  signup,
  notifications
});

export default feedbackApp;
