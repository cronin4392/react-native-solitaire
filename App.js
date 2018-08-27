import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers';

import Screens from './screens';

const middleware = [
  thunk,
];

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Screens />
      </Provider>
    );
  }
}