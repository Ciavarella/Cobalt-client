import {
  REQUEST_SIGNUP_START,
  REQUEST_SIGNUP_SUCCESS,
  REQUEST_SIGNUP_FAIL
} from "./constants";

const initialState = {
  user: {},
  isFetching: false,
  message: null,
  success: false
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SIGNUP_START:
      return { ...state, isFetching: true };
    case REQUEST_SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isFetching: false,
        message: action.payload.message,
        success: action.payload.success
      };
    case REQUEST_SIGNUP_FAIL:
      return {
        ...state,
        user: {},
        isFetching: false,
        message: action.payload.message,
        success: action.payload.success
      };
    default:
      return state;
  }
};

export default signupReducer;
