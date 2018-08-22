import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { symbol } from '../../helpers/cards';

export default class Card extends React.Component {
  static propTypes = {
    card: PropTypes.shape({
      suit: PropTypes.string.isRequired,
      pip: PropTypes.string.isRequired,
    }).isRequired
  };

  render() {
    const { card } = this.props;
    const { pip, suit } = card;

    return (
      <View style={styles.card}>
        <Text>{symbol(pip)} {symbol(suit)}</Text>
      </View>
    )
  }
}

export const cardWidth = Dimensions.get('window').width / 4;
export const cardHeight = cardWidth * 1.5;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    overflow: 'hidden',
    height: cardHeight,
    width: cardWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});