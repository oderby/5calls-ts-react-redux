import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger, ReduxLoggerOptions } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import About from './components/about';

const history = createHistory();

import Main from './containers/main';

import rootReducer from './reducers';

declare var process: any;
const env = process.env.NODE_ENV;
const middlewares: any[] = [ thunk ];

if (env === 'dev') {
  const options: ReduxLoggerOptions = {};
  middlewares.push(createLogger(options));
}

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" exact={true} component={Main}/>
        <Route path="/about" exact={true} component={About}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
