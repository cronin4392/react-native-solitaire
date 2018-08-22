import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '../Card';
import EmptyCardSpace from '../EmptyCardSpace';

import { cardHeight } from '../Card';

export default class CardStack extends React.Component {
  render() {
    const { stack } = this.props;
    return (
      <View style={styles.cardStack}>
        <EmptyCardSpace absolute={stack.length > 0} />
        {stack.map((card, index) => <View key={index} style={styles.cardStackItem}><Card card={card} /></View>)}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  cardStack: {
    flexDirection: 'column',
  },
  cardStackItem: {
    marginBottom: (-1 * cardHeight) + 30
  }
});
