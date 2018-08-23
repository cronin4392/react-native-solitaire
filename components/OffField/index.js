import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import StackedPile from '../StackedPile';
import SpreadPile from '../SpreadPile';

import { HORIZONTAL } from '../../constants/cards';

export default class OffField extends React.Component {
  render() {
    const { pickup, waste } = this.props;

    return (
      <View style={styles.offField}>
        <StackedPile pile={pickup} />
        <SpreadPile pile={waste} direction={HORIZONTAL} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  offField: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
  },
});