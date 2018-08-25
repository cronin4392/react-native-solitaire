import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { RED, SUIT_COLOR } from '../../constants/cards';
import { symbol } from '../../helpers/cards';

export default class Card extends React.Component {
  static propTypes = {
    card: PropTypes.shape({
      suit: PropTypes.string.isRequired,
      pip: PropTypes.string.isRequired,
      isFaceUp: PropTypes.bool
    }).isRequired
  };

  static defaultProps = {
    onCardClick: () => {},
    location: null,
  };

  _onClick = () => {
    const { id, location, onCardClick } = this.props;
    onCardClick({ id, location });
  }

  render() {
    const {
      card,
      columnWidth,
      isFaceUp,
      isSelected,
    } = this.props;
    const { pip, suit } = card;
    const isRed = SUIT_COLOR[suit] === RED;
    const dimensions = {
      width: columnWidth,
      height: columnWidth * 1.5,
    };
    const selectedStyles = isSelected ? {opacity: 0.2} : {};

    if (!isFaceUp) {
      return (
        <TouchableOpacity onPress={this._onClick} activeOpacity={1}>
          <View style={[dimensions, styles.card]}>
            <View style={[styles.selectedOverlay, selectedStyles]}></View>
            <View style={styles.cardBack}></View>
          </View>
        </TouchableOpacity>
      );
    }

    const cardStyle = [dimensions, styles.card, isRed && styles.redCard];
    const cardTextStyle = [styles.cardText, isRed && styles.redCardText];

    return (
      <TouchableOpacity onPress={this._onClick} activeOpacity={1}>
        <View style={cardStyle}>
          <View style={[styles.selectedOverlay, selectedStyles]}></View>
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
  },
  selectedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
    opacity: 0,
    zIndex: 2,
  }
});
