import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import reducers from './reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
  },
});
