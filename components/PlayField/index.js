import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import CardStack from '../CardStack';

export default class PlayField extends React.Component {
  render() {
    const { deck } = this.props;
    if (!deck || deck.length <= 0) {
      return null;
    }

    return (
      <View style={styles.playField}>
        <CardStack stack={deck} />
        <CardStack stack={[]} />
        <CardStack stack={[]} />
        <CardStack stack={[]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playField: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
});