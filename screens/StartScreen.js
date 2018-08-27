import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Layout from './Layout';

import StartGameContainer from '../containers/StartGameContainer';

import Card from '../components/Card';

import { DIAMONDS, KING } from '../constants/cards';
import { MONOSPACE_FONT } from '../constants/styles';

class StartGameButton extends React.Component {
  _onClick = () => {
    const { navigation, startNewGame } = this.props;
    const { navigate } = navigation;
    startNewGame();
    navigate('Game');
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onClick} style={styles.button}>
        <Text style={styles.buttonText}>NEW GAME</Text>
      </TouchableOpacity>
    );
  }
}

class StartScreen extends React.Component {
  render() {
    return (
      <Layout>
        <View style={styles.container}>
          <View style={styles.card}>
            <Card
              card={{
                suit: DIAMONDS,
                pip:KING,
              }}
              isFaceUp={true}
              columnWidth={100}
            />
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>SOLITAIRE</Text>
          </View>
          <View style={styles.buttonContainer}>
            <StartGameContainer>
              {({ startNewGame }) => (
                <StartGameButton navigation={this.props.navigation} startNewGame={startNewGame} />
              )}
            </StartGameContainer>
          </View>
        </View>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 100,
  },
  header: {
    marginTop: 54,
    marginBottom: 54,
  },
  headerText: {
    fontFamily: MONOSPACE_FONT,
    fontSize: 36,
    lineHeight: 42,
  },
  button: {
    padding: 11,
    paddingBottom: 8,
    borderWidth: 1,
  },
  buttonContainer: {
    marginBottom: 54,
  },
  buttonText: {
    fontFamily: MONOSPACE_FONT,
    fontSize: 11,
    lineHeight: 11,
  }
});

export default StartScreen;
