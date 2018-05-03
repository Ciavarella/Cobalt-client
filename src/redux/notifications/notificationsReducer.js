import {
  REQUEST_AUTH_START,
  REQUEST_AUTH_SUCCESS,
  REQUEST_AUTH_FAIL
} from "../auth/constants";
import { REMOVE_OLD_NOTIFICATION } from "./constants";

const initialState = {
  messages: []
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_AUTH_SUCCESS:
    case REQUEST_AUTH_FAIL:
      return {
        ...state,
        messages: [...state.messages, action.payload.message]
      };
    case REMOVE_OLD_NOTIFICATION:
      return {
        messages: state.messages.shift()
      };
    default:
      return state;
  }
};

// const notificationsReducer = reducer => {
//   return function(state, action) {
//     switch (action.type) {
//       case REQUEST_AUTH_SUCCESS:
//         console.log(action.payload.message);
//         break;
//       case REQUEST_AUTH_FAIL:
//         console.log(action.payload.message);
//         break;
//       default:
//         console.log("defaulted");
//     }

//     console.log("fromNotificatinsReducer", state, action);
//     return reducer(state, action);
//   };
// };

export default notificationsReducer;
