import { combineReducers } from 'redux';

import {authentication} from './authenticate.reducer';
import { userReducers } from './user.reducer';

const rootReducer = combineReducers({
  authentication,
  userReducers
});

export default rootReducer;