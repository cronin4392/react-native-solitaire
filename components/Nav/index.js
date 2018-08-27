import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import GameStateContainer from '../../containers/GameStateContainer';

import { MONOSPACE_FONT } from '../../constants/styles';


class Nav extends React.PureComponent {
  _menuOnClick = ({ pauseGame }) => {
    const { navigation } = this.props;
    pauseGame();
    navigation.navigate('Start');
  }

  render() {
    return (
      <View style={styles.container}>
        <GameStateContainer>
          {({ pauseGame }) => (
            <TouchableOpacity onPress={() => this._menuOnClick({ pauseGame })} style={styles.button}>
              <Text style={styles.buttonText}> {'←'} MENU</Text>
            </TouchableOpacity>
          )}
        </GameStateContainer>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  button: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  buttonText: {
    fontFamily: MONOSPACE_FONT,
    fontSize: 11,
    lineHeight: 11,
  }
});

export default Nav;