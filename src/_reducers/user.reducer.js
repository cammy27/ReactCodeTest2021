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
      case userConstants.ADD_NEW_USER_REQUEST:
        return{

        }
      case userConstants.ADD_NEW_USER__SUCCESS:
        return{
          user:action.user
        }
    case userConstants.AUTHENTICATE_FAILURE:
      return{}
    default:
      return state
  }
}