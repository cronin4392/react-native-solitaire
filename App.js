import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Font } from 'expo';

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
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Menlo': require('./assets/fonts/Menlo-Regular.ttf'),
    });

    this.setState({
      fontLoaded: true
    });
  }

  render() {
    const { fontLoaded } = this.state;

    if (!fontLoaded) {
      return null;
    }

    return (
      <Provider store={store}>
        <Screens />
      </Provider>
    );
  }
}