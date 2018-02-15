import { combineReducers } from 'redux';

import commentReducer from './comments';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  comments: commentReducer,
  authenticated: authenticationReducer,
});

export default rootReducer;
