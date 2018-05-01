import {
  REQUEST_SESSION_START,
  REQUEST_SESSION_SUCCESS,
  REQUEST_SESSION_FAIL,
  SESSION_CREATED
} from "./constants";

const initialState = {
  session: {},
  isFetching: false,
  newSessionCreated: false,
  message: null
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SESSION_START:
      return { ...state, isFetching: true };
    case REQUEST_SESSION_SUCCESS:
      return {
        ...state,
        session: action.payload.session,
        newSessionCreated: true,
        isFetching: false,
        message: action.payload.message
      };
    case REQUEST_SESSION_FAIL:
      return {
        ...state,
        session: {},
        isFetching: false,
        message: action.payload.message
      };
    case SESSION_CREATED:
      return {
        ...state,
        newSessionCreated: false
      };
    default:
      return state;
  }
};

export default sessionReducer;
