import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import commentReducer from './comments';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  comments: commentReducer,
  authenticated: authenticationReducer,
  form
});

export default rootReducer;
