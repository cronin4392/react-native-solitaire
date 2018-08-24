import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

  static defaultProps = {
    onCardClick: () => {}
  };

  _onClick = () => {
    const { cardId, onCardClick } = this.props;
    onCardClick(cardId);
  }

  render() {
    const {
      card,
      columnWidth,
      faceUp,
    } = this.props;
    const { pip, suit } = card;
    const isRed = [DIAMONDS, HEARTS].indexOf(suit) >= 0;
    const dimensions = {
      width: columnWidth,
      height: columnWidth * 1.5,
    };

    if (!faceUp) {
      return (
        <View style={[dimensions, styles.card]}>
          <View style={styles.cardBack}></View>
        </View>
      );
    }

    const cardStyle = [dimensions, styles.card, isRed && styles.redCard];
    const cardTextStyle = [styles.cardText, isRed && styles.redCardText];

    return (
      <TouchableOpacity onPress={this._onClick} activeOpacity={1}>
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
      </TouchableOpacity>
    )
  }
}

const textSpacingFromEdge = 3;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
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
  },
  cardBack: {
    position: 'absolute',
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 2,
  }
});