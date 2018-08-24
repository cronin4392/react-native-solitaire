import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Column from '../Column';
import SpreadPile from '../SpreadPile';

import { PADDING } from '../../constants/layout';

export default class PlayField extends React.Component {
  render() {
    const { piles } = this.props;

    return (
      <View style={styles.playField}>
        {piles.map((pile, index) =>
          <Column
            columns={7}
            columnSpan={1}
            padding={PADDING}
            render={({ columnWidth }) =>
              <SpreadPile key={index} pile={pile} columnWidth={columnWidth} />
            }
          />
        )}
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