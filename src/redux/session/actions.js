import {
  REQUEST_SESSION_START,
  REQUEST_SESSION_SUCCESS,
  REQUEST_SESSION_FAIL,
  REQUEST_DELETE_SESSION_START,
  REQUEST_DELETE_SESSION_SUCCESS,
  REQUEST_DELETE_SESSION_FAIL,
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

export const requestDeleteSessionStart = () => ({
  type: REQUEST_DELETE_SESSION_START
});
export const requestDeleteSessionSuccess = data => ({
  type: REQUEST_DELETE_SESSION_SUCCESS,
  payload: data
});
export const requestDeleteSessionFail = err => ({
  type: REQUEST_DELETE_SESSION_FAIL,
  payload: err
});

export const sessionCreated = () => ({ type: SESSION_CREATED });

export const requestNewSession = data => dispatch => {
  dispatch(requestSessionStart());

  const {
    maxAttendees,
    threshold,
    descriptionPositive,
    descriptionNegative,
    comments,
    isAverage,
    name,
    message
  } = data;

  fetch(`${process.env.REACT_APP_API_BASE_URL}/api/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({
      name,
      description: message,
      settings: {
        maxAttendees,
        threshold,
        engagementDescription: {
          up: descriptionPositive,
          down: descriptionNegative
        }
      }
    })
  })
    .then(handleResponse)
    .then(data => dispatch(requestSessionSuccess(data)))
    .catch(err => dispatch(requestSessionFail(err)));
};

export const requestDeleteSession = id => dispatch => {
  dispatch(requestDeleteSessionStart());
  fetch(`${process.env.REACT_APP_API_BASE_URL}/api/session/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  })
    .then(handleResponse)
    .then(data => dispatch(requestDeleteSessionSuccess(data)))
    .catch(err => dispatch(requestDeleteSessionFail(err)));
};

const handleResponse = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
