import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Column from '../Column';
import StackedPile from '../StackedPile';
import SpreadPile from '../SpreadPile';

import { HORIZONTAL } from '../../constants/cards';
import { PADDING } from '../../constants/layout';

export default class OffField extends React.Component {
  _onPickupPress = () => {
    const { onPickupPress } = this.props;
    onPickupPress();
  }

  render() {
    const { pickup, waste } = this.props;

    return (
      <View style={styles.offField}>
        <Column
          columns={7}
          columnSpan={1}
          padding={PADDING}
          render={({ columnWidth }) =>
            <TouchableOpacity onPress={this._onPickupPress}>
              <StackedPile pile={pickup} columnWidth={columnWidth} />
            </TouchableOpacity>
          }
        />
        <Column
          columns={7}
          columnSpan={2}
          padding={PADDING}
          render={({ columnWidth }) =>
            <SpreadPile pile={waste} direction={HORIZONTAL} columnWidth={columnWidth} />
          }
        />
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