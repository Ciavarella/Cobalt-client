import {
  REQUEST_SESSION_START,
  REQUEST_SESSION_SUCCESS,
  REQUEST_SESSION_FAIL,
  SESSION_CREATED
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

export const sessionCreated = () => ({ type: SESSION_CREATED });

export const requestNewSession = data => dispatch => {
  dispatch(requestSessionStart());

  fetch(`${process.env.REACT_APP_API_BASE_URL}/api/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(data)
  })
    .then(handleResponse)
    .then(data => dispatch(requestSessionSuccess(data)))
    .catch(err => dispatch(requestSessionFail(err)));
};

const handleResponse = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
