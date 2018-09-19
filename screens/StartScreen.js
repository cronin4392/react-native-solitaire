import React, { Fragment } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Layout from './Layout';
import NavigationService from '../NavigationService.js';

import GameStateContainer from '../containers/GameStateContainer';

import Card from '../components/Card';

import { DIAMONDS, KING } from '../constants/cards';
import { PLAYING, PAUSED } from '../constants/game';
import { MONOSPACE_FONT } from '../constants/styles';

class StartGameButton extends React.Component {
  _onClick = () => {
    const { startNewGame } = this.props;
    startNewGame();
    NavigationService.navigate('Game');
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onClick} style={styles.button}>
        <Text style={styles.buttonText}>NEW GAME</Text>
      </TouchableOpacity>
    );
  }
}

class ContinueGameButton extends React.Component {
  _onClick = () => {
    const { setGameState } = this.props;
    setGameState(PLAYING);
    NavigationService.navigate('Game');
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onClick} style={styles.button}>
        <Text style={styles.buttonText}>CONTINUE GAME</Text>
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
                pip: KING,
              }}
              isFaceUp={true}
              columnWidth={100}
            />
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>SOLITAIRE</Text>
          </View>
          <View style={styles.buttonContainer}>
            <GameStateContainer>
              {({ setGameState, startNewGame, gameState }) => (
                <Fragment>
                  { gameState === PAUSED && <ContinueGameButton setGameState={setGameState} /> }
                  <StartGameButton startNewGame={startNewGame} />
                </Fragment>
              )}
            </GameStateContainer>
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
  buttonContainer: {
    marginBottom: 54,
  },
  button: {
    padding: 11,
    paddingBottom: 8,
    borderWidth: 1,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: MONOSPACE_FONT,
    fontSize: 11,
    lineHeight: 11,
    textAlign: 'center',
  }
});

export default StartScreen;
