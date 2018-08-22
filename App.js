import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';

import reducers from './reducers';

const store = createStore(reducers);

import { DECK } from './constants/cards';
import { shuffle } from './helpers/cards';

import CardStack from './components/CardStack';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: shuffle(DECK)
    };
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <SafeAreaView style={styles.playField}>
            <CardStack stack={this.state.deck} />
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
  playField: {
    flex: 1,
    flexDirection: 'row',
  },
});
