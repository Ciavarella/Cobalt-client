import {
  REQUEST_SESSION_START,
  REQUEST_SESSION_SUCCESS,
  REQUEST_SESSION_FAIL
} from "./constants";

export const requestSessionStart = () => ({ type: REQUEST_SESSION_START });
export const requestSessionSuccess = data => ({
  type: REQUEST_SESSION_SUCCESS,
  payload: data
});
export const requestSessionFail = err => ({
  type: REQUEST_SESSION_FAIL,
  payload: err
});
