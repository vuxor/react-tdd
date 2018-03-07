import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import Resources from './components/resources';

import reqAuth from './components/require_authentication';
import App from './components/app';
import Signin from './components/auth/signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/resources" component={reqAuth(Resources)} />
        <Route path="/signin" component={Signin} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
