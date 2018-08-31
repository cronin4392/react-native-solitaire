import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Font } from 'expo';

import NavigationService from './NavigationService';

import { winGame } from './actions';
import reducers from './reducers';

import Screens from './screens';

import { PLAYING } from './constants/game';

const middleware = [
  thunk,
];

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

store.subscribe(() => {
  prevState = currentState;
  const currentState = store.getState();

  const { solitaire, game } = currentState;
  const {
    foundation_1,
    foundation_2,
    foundation_3,
    foundation_4
  } = solitaire;
  const { gameState } = game;

  if (
    foundation_1.length === 13 &&
    foundation_2.length === 13 &&
    foundation_3.length === 13 &&
    foundation_4.length === 13 &&
    gameState === PLAYING
  ) {
    store.dispatch(winGame());
    NavigationService.navigate('GameOver');
  }
});

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
        <Screens
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}