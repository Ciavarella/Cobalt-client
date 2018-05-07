import {
  REQUEST_SIGNUP_START,
  REQUEST_SIGNUP_SUCCESS,
  REQUEST_SIGNUP_FAIL
} from "./constants";

import { handleResponse } from "../utils/utils";

export const requestSignupStart = () => ({ type: REQUEST_SIGNUP_START });
export const requestSignupSuccess = data => ({
  type: REQUEST_SIGNUP_SUCCESS,
  payload: data
});
export const requestSignupFail = err => ({
  type: REQUEST_SIGNUP_FAIL,
  payload: err
});

export const requestSignup = credentials => dispatch => {
  dispatch(requestSignupStart());

  fetch(`${process.env.REACT_APP_API_BASE_URL}/api/user`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then(handleResponse)
    .then(data => dispatch(requestSignupSuccess(data)))
    .catch(err => dispatch(requestSignupFail(err)));
};
