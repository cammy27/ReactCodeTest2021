import { userConstants } from '../_constants/userContants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.AUTHENTICATE_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.AUTHENTICATE_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.AUTHENTICATE_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}