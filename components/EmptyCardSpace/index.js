import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EmptyCardSpace = ({ absolute, columnWidth }) => (
  <View style={[
    absolute ? styles.emptyCardSpaceAbsolute : styles.emptyCardSpace,
    {
      width: columnWidth,
      height: columnWidth * 1.5,
    }
  ]}>
    <Text style={styles.emptyCardText}>Empty</Text>
  </View>
)

const defaultStyles = {
  borderColor: '#ccc',
  borderWidth: 1,
  overflow: 'hidden',
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