import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import StackedPile from '../StackedPile';

export default class OffField extends React.Component {
  render() {
    const { pickup } = this.props;

    return (
      <View style={styles.playField}>
        <StackedPile pile={pickup} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playField: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
  },
});