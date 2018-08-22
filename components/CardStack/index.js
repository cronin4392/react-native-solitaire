import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '../Card';

export default class CardStack extends React.Component {
  render() {
    const { stack } = this.props;
    return (
      <View style={styles.cardStack}>
        {stack.map((card, index) => <Card key={index} card={card} />)}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  cardStack: {
    flex: 1,
    flexDirection: 'column',
    // flexWrap: 'wrap',
  },
});
