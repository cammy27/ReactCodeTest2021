import { userConstants } from '../_constants/userContants';


const initialState =  {};

export function userReducers(state = initialState, action) {
  switch (action.type) {
    case userConstants.USERS_LIST_REQUEST:
      return {
      };
    case userConstants.USERS_LIST_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.USERS_LIST_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}