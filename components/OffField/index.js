import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PickupContainer from '../../containers/PickupContainer';
import WasteContainer from '../../containers/WasteContainer';

import Column from '../Column';

import { PADDING } from '../../constants/styles';

export default class OffField extends React.Component {
  render() {
    return (
      <View style={styles.offField}>
        <Column
          columns={7}
          columnSpan={1}
          padding={PADDING}
        >
          {({ columnWidth }) =>
            <PickupContainer columnWidth={columnWidth} />
          }
        </Column>
        <Column
          columns={7}
          columnSpan={2}
          padding={PADDING}
        >
          {({ columnWidth }) =>
            <WasteContainer columnWidth={columnWidth} />
          }
        </Column>
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
