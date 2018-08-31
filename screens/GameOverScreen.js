import React, { Fragment } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import NavigationService from '../NavigationService';
import Layout from './Layout';

import Card from '../components/Card';

import GameStateContainer from '../containers/GameStateContainer';
import TimeContainer from '../containers/TimeContainer';

import { displayTime } from '../helpers/game';

import { SPADES, FOUR } from '../constants/cards';
import { ENDED } from '../constants/game';
import { MONOSPACE_FONT, FONT_STYLE } from '../constants/styles';

class BackToMenuButton extends React.Component {
  _onClick = () => {
    const { setGameState } = this.props;
    setGameState(ENDED);
    NavigationService.navigate('Start');
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onClick} style={styles.button}>
        <Text style={styles.buttonText}>BACK TO MENU</Text>
      </TouchableOpacity>
    );
  }
}

const GameScreen = () =>
  <Layout>
    <GameStateContainer>
      {({ setGameState }) => (
        <View style={styles.container}>
          <View style={styles.card}>
            <Card
              card={{
                suit: SPADES,
                pip: FOUR,
              }}
              isFaceUp={true}
              columnWidth={100}
            />
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>YOU WON</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TimeContainer>
              {({ secondsPassed }) =>
                <Text style={FONT_STYLE}>TIME: {displayTime(secondsPassed)} </Text>
              }
            </TimeContainer>
          </View>
          <View style={styles.buttonContainer}>
            <BackToMenuButton setGameState={setGameState} />
          </View>
        </View>
      )}
    </GameStateContainer>
  </Layout>

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

export default GameScreen;
