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
          <View style={styles.header}>
            <Text style={styles.headerText}>SOLITAIRE</Text>
          </View>
          <TouchableOpacity onPress={this._onClick} style={styles.button}>
            <Text style={styles.buttonText}>NEW GAME</Text>
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
  header: {
    // marginTop: 54,
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
  buttonText: {
    fontFamily: MONOSPACE_FONT,
    fontSize: 11,
    lineHeight: 11,
  }
});

export default StartScreen;
