import React, { Fragment } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Column from '../Column';

import GameStateContainer from '../../containers/GameStateContainer';
import TimeContainer from '../../containers/TimeContainer';

import { displayTime } from '../../helpers/game';
import { FONT_STYLE } from '../../constants/styles';

import KingLogoImage from '../../assets/images/KingLogo.png';

class Nav extends React.PureComponent {
  _menuOnClick = ({ pauseGame }) => {
    const { navigation } = this.props;
    pauseGame();
    navigation.navigate('Start');
  }

  render() {
    return (
      <View style={styles.container}>
        <Column
          columns={3}
          columnSpan={1}
          style={{ flexDirection: 'row', }}
        >
          {() => 
            <GameStateContainer>
              {({ pauseGame }) => (
                <TouchableOpacity onPress={() => this._menuOnClick({ pauseGame })} style={styles.button}>
                  <Text style={FONT_STYLE}> {'←'} MENU </Text>
                </TouchableOpacity>
              )}
            </GameStateContainer>
          }
        </Column>
        <Column
          columns={3}
          columnSpan={1}
          style={{ flexDirection: 'row', justifyContent: 'center' }}
        >
          {() =>
            <View style={styles.logo}>
              <ImageBackground source={KingLogoImage} style={{ width: '100%', height: '100%' }} />
            </View>
          }
        </Column>
        <Column
          columns={3}
          columnSpan={1}
          style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}
        >
          {() =>
            <Fragment>
              <TimeContainer>
                {({ secondsPassed }) =>
                  <View><Text style={FONT_STYLE}>{displayTime(secondsPassed)} </Text></View>
                }
              </TimeContainer>
              <View><Text style={FONT_STYLE}>  $0 </Text></View>
            </Fragment>
          }
        </Column>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    height: 60,
  },
  button: {
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 40,
    flex: 1,
    paddingTop: 2,
    paddingBottom: 4,
  }
});

export default Nav;