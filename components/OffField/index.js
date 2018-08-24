import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';

import StackedPile from '../StackedPile';
import SpreadPile from '../SpreadPile';

import { HORIZONTAL } from '../../constants/cards';

export default class OffField extends React.Component {
  _onPickupPress = () => {
    const { onPickupPress } = this.props;
    onPickupPress();
  }

  render() {
    const { pickup, waste } = this.props;

    return (
      <View style={styles.offField}>
        <TouchableOpacity onPress={this._onPickupPress}>
          <StackedPile pile={pickup} />
        </TouchableOpacity>
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