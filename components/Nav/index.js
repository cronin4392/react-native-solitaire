import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MONOSPACE_FONT } from '../../constants/styles';

const Nav = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Start')} style={styles.button}>
      <Text style={styles.buttonText}> {'←'} MENU</Text>
    </TouchableOpacity>
  </View>
);

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