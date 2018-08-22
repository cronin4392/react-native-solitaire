import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '../Card';
import EmptyCardSpace from '../EmptyCardSpace';

export default class CardStack extends React.Component {
  render() {
    const { stack } = this.props;
    return (
      <View style={styles.cardStack}>
        <EmptyCardSpace absolute={stack.length > 0} />
        {stack.map((card, index) => <Card key={index} card={card} />)}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  cardStack: {
    flexDirection: 'column',
  },
});
