import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import CardBack from './CardBack';

import { RED, SUIT_COLOR } from '../../constants/cards';
import { MONOSPACE_FONT } from '../../constants/styles';
import { symbol } from '../../helpers/cards';

export default class Card extends React.PureComponent {
  static propTypes = {
    card: PropTypes.shape({
      suit: PropTypes.string.isRequired,
      pip: PropTypes.string.isRequired,
    }).isRequired,
    isFaceUp: PropTypes.bool,
    columnWidth: PropTypes.number.isRequired,
  };

  render() {
    const {
      card,
      columnWidth,
      isFaceUp,
    } = this.props;
    const { pip, suit } = card;
    const isRed = SUIT_COLOR[suit] === RED;
    const dimensions = {
      width: columnWidth,
      height: columnWidth * 1.5,
    };
    const styles = generateStyles(dimensions);

    const cardStyle = [
      dimensions,
      styles.card,
      isFaceUp && isRed && styles.redCard
    ];
    const cardTextStyle = [
      styles.cardText,
      isFaceUp && isRed && styles.redCardText
    ];

    if (!isFaceUp) {
      return (
        <View style={cardStyle}>
          <CardBack dimensions={dimensions} />
        </View>
      );
    }

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

const generateStyles = ({ width }) => {
  const scale = Math.min(54, width);
  const textSpacingFromEdge = scale * (3 / 44);
  const fontSize = scale * (11 / 44);

  return StyleSheet.create({
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
      fontFamily: MONOSPACE_FONT,
      fontSize: fontSize,
      lineHeight: fontSize,
    },
    redCardText: {
      color: '#f00'
    },
    selectedOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#000',
      opacity: 0,
      zIndex: 2,
    }
  });
};
