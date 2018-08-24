import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import Column from '../Column';
import SpreadPile from '../SpreadPile';

import { PILES } from '../../constants/cards';
import { PADDING } from '../../constants/layout';

export default class PlayField extends React.Component {
  render() {
    const { piles } = this.props;

    return (
      <View style={styles.playField}>
        {piles.map((pile, index) =>
          <Column
            key={index}
            columns={7}
            columnSpan={1}
            padding={PADDING}
            render={({ columnWidth }) =>
              <SpreadPile
                pile={pile}
                columnWidth={columnWidth}
                location={PILES[index]}
              />
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