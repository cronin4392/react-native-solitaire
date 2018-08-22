import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import reducers from './reducers';

const store = createStore(reducers);

import DeckContainer from './containers/DeckContainer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <SafeAreaView style={styles.safeZone}>
            <ScrollView style={styles.scrollingField}>
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
