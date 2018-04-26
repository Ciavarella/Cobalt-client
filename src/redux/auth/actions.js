import {
  REQUEST_AUTH_START,
  REQUEST_AUTH_SUCCESS,
  REQUEST_AUTH_FAIL
} from "./constants";

export const requestAuthStart = () => ({ type: REQUEST_AUTH_START });
export const requestAuthSuccess = data => ({
  type: REQUEST_AUTH_SUCCESS,
  payload: data
});
export const requestAuthFail = err => ({
  type: REQUEST_AUTH_FAIL,
  payload: err
});

export const requestAuth = credentials => dispatch => {
  dispatch(requestAuthStart());

  fetch(`${process.env.REACT_APP_API_BASE_URL}/api/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  })
    .then(response => response.json())
    .then(data => dispatch(requestAuthSuccess(data)))
    .catch(err => dispatch(requestAuthFail(err)));
};
