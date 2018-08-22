import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { cardHeight, cardWidth } from '../Card';

const EmptyCardSpace = ({ absolute }) => (
  <View style={absolute ? styles.emptyCardSpaceAbsolute : styles.emptyCardSpace}>
    <Text style={styles.emptyCardText}>Empty</Text>
  </View>
)

const defaultStyles = {
  borderColor: '#ccc',
  borderWidth: 1,
  overflow: 'hidden',
  height: cardHeight,
  width: cardWidth,
  alignItems: 'center',
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  emptyCardSpace: {
    ...defaultStyles,
  },
  emptyCardSpaceAbsolute: {
    ...defaultStyles,
    position: 'absolute',
  },
  emptyCardText: {
    color: '#ccc',
  }
});

export default EmptyCardSpace;