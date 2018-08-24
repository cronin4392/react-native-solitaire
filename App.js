import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import reducers from './reducers';

import { PADDING } from './constants/layout';

const middleware = [
  thunk,
];

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

import DeckContainer from './containers/DeckContainer';

export default class App extends React.Component {
  componentDidMount() {
    // Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <SafeAreaView style={styles.safeZone}>
            <ScrollView style={styles.scrollingField} alwaysBounceVertical={false}>
              <DeckContainer />
            </ScrollView>
          </SafeAreaView>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  safeZone: {
    flex: 1,
  },
  scrollingField: {
    flex: 1,
    // padding: PADDING,
  },
});
