import {
  REQUEST_SESSION_START,
  REQUEST_SESSION_SUCCESS,
  REQUEST_SESSION_FAIL
} from "./constants";

const initialState = {
  session: {},
  isFetching: false,
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
    default:
      return state;
  }
};

export default sessionReducer;
