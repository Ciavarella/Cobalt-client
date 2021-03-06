import {
  REQUEST_SIGNUP_SUCCESS,
  REQUEST_SIGNUP_FAIL
} from "../signup/constants";
import {
  REQUEST_SESSION_SUCCESS,
  REQUEST_SESSION_FAIL
} from "../session/constants";
import { REMOVE_OLD_NOTIFICATION } from "./constants";

const initialState = {
  messages: [],
  counter: 0
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SIGNUP_SUCCESS:
    case REQUEST_SIGNUP_FAIL:
    case REQUEST_SESSION_SUCCESS:
    case REQUEST_SESSION_FAIL:
      return {
        ...state,
        messages: [
          ...state.messages,
          Object.assign({}, action.payload.message, { id: state.counter })
        ],
        counter: state.counter++
      };
    case REMOVE_OLD_NOTIFICATION:
      return {
        ...state,
        messages: state.messages.filter(i => i.id !== action.payload)
      };
    default:
      return state;
  }
};

export default notificationsReducer;
