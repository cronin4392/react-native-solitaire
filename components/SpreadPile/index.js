import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import CardContainer from '../../containers/CardContainer';
import EmptyCardSpace from '../EmptyCardSpace';

import { HORIZONTAL, VERTICAL } from '../../constants/cards';
const SPREAD_OFFSET = 20;

export default class SpreadPile extends React.Component {
  static defaultProps = {
    direction: VERTICAL,
    columnWidth: null,
  };

  static propTypes = {
    direction: PropTypes.oneOf([VERTICAL, HORIZONTAL])
  };

  render() {
    const { columnWidth, direction, pile, } = this.props;
    const isVertical = direction === VERTICAL;
    const cardWidth = columnWidth;
    const cardHeight = cardWidth * 1.5;

    const pileStyle = isVertical ? styles.pileVertical : styles.pileHorizontal;

    const pileItemStyle = isVertical ? {
      marginBottom: (-1 * cardHeight) + SPREAD_OFFSET
    } : {
      marginRight: (-1 * cardWidth) + SPREAD_OFFSET
    };

    return (
      <View style={pileStyle}>
        <EmptyCardSpace absolute={pile.length > 0} columnWidth={columnWidth} />
        {pile.map((card, index) =>
          <View key={index} style={index !== pile.length - 1 && pileItemStyle}>
            <CardContainer cardId={card} {...this.props} />
          </View>
        )}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  pileVertical: {
    flexDirection: 'column',
    overflow: 'hidden',
  },
  pileHorizontal: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
});
