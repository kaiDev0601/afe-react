import {
  SET_USER_TYPE
} from '../actions/types';

const initialState = {
  isAuthenticated: null,
  userType: ''
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_TYPE:
      return {
        ...state,
        userType: payload
      }
    default:
      return state
  }
}

export default authReducer;
