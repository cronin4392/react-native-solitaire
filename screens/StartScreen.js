import React from 'react';
import Layout from './Layout';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MONOSPACE_FONT } from '../constants/styles';

class StartScreen extends React.Component {
  _onClick = () => {
    const { navigate } = this.props.navigation;
    navigate('Game');
  }

  render() {
    return (
      <Layout>
        <View style={styles.container}>
          <TouchableOpacity onPress={this._onClick}>
            <Text style={styles.buttonStyle}>New game</Text>
          </TouchableOpacity>
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
  buttonStyle: {
    fontFamily: MONOSPACE_FONT,
    fontSize: 11,
    lineHeight: 11,
  }
});

export default StartScreen;
