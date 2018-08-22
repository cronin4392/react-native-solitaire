import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { CLUBS, DIAMONDS, HEARTS, SPADES } from '../../constants/cards';
import { symbol } from '../../helpers/cards';

export default class Card extends React.Component {
  static propTypes = {
    card: PropTypes.shape({
      suit: PropTypes.string.isRequired,
      pip: PropTypes.string.isRequired,
      faceUp: PropTypes.bool
    }).isRequired
  };

  render() {
    const { card, faceUp } = this.props;
    const { pip, suit } = card;
    const isRed = [DIAMONDS, HEARTS].indexOf(suit) >= 0;

    if (!faceUp) {
      return (
        <View style={styles.card}>
          <Text style={styles.cardText}>Down</Text>
        </View>
      );
    }

    const cardStyle = [styles.card, isRed && styles.redCard];
    const cardTextStyle = [styles.cardText, isRed && styles.redCardText];

    return (
      <View style={cardStyle}>
        <View style={styles.cardSuitTop}>
          <Text style={cardTextStyle}>{symbol(pip)}</Text>
          <Text style={cardTextStyle}>{symbol(suit)}</Text>
        </View>
        <View style={styles.cardSuitBottom}>
          <Text style={cardTextStyle}>{symbol(pip)}</Text>
          <Text style={cardTextStyle}>{symbol(suit)}</Text>
        </View>
      </View>
    )
  }
}

// Subtract a small amount so that they all fit on 1 row
export const cardWidth = (Dimensions.get('window').width / 7) - 0.000001;
export const cardHeight = cardWidth * 1.5;

const textSpacingFromEdge = 3;

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
  redCard: {
    borderColor: '#f00'
  },
  cardSuitTop: {
    position: 'absolute',
    top: textSpacingFromEdge,
    left: textSpacingFromEdge,
    alignItems: 'center',
  },
  cardSuitBottom: {
    position: 'absolute',
    right: textSpacingFromEdge,
    bottom: textSpacingFromEdge,
    alignItems: 'center',
    transform: [{
      rotate: '180deg'
    }],
  },
  cardText: {
    fontFamily: 'Menlo-Regular',
    fontSize: 11,
    lineHeight: 11
  },
  redCardText: {
    color: '#f00'
  }
});