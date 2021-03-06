import {
  REQUEST_USER_START,
  REQUEST_USER_SUCCESS,
  REQUEST_USER_FAIL
} from "./constants";

import { handleResponse } from "../utils/utils";

export const requestUserStart = () => ({ type: REQUEST_USER_START });
export const requestUserSuccess = data => ({
  type: REQUEST_USER_SUCCESS,
  payload: data
});
export const requestUserFail = err => ({
  type: REQUEST_USER_FAIL,
  payload: err
});

export const requestUser = id => dispatch => {
  dispatch(requestUserStart());

  fetch(`${process.env.REACT_APP_API_BASE_URL}/api/user/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(handleResponse)
    .then(data => dispatch(requestUserSuccess(data)))
    .catch(err => dispatch(requestUserFail(err)));
};

