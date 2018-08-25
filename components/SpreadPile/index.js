import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import CardContainer from '../../containers/CardContainer';
import Card from '../Card';
import EmptyCardSpace from '../EmptyCardSpace';

import { HORIZONTAL, VERTICAL } from '../../constants/cards';

const SMALL_SPREAD_OFFSET = 12;
const LARGE_SPREAD_OFFSET = 20;

export default class SpreadPile extends React.PureComponent {
  static defaultProps = {
    direction: VERTICAL,
    columnWidth: null,
  };

  static propTypes = {
    direction: PropTypes.oneOf([VERTICAL, HORIZONTAL])
  };

  render() {
    const { columnWidth, direction, pile } = this.props;
    const isVertical = direction === VERTICAL;
    const cardWidth = columnWidth;
    const cardHeight = cardWidth * 1.5;

    const pileStyle = isVertical ? styles.pileVertical : styles.pileHorizontal;

    const smallOffsetStyle = isVertical ? {
      marginBottom: (-1 * cardHeight) + SMALL_SPREAD_OFFSET
    } : {
      marginRight: (-1 * cardWidth) + SMALL_SPREAD_OFFSET
    };

    const largeOffsetStyle = isVertical ? {
      marginBottom: (-1 * cardHeight) + LARGE_SPREAD_OFFSET
    } : {
      marginRight: (-1 * cardWidth) + LARGE_SPREAD_OFFSET
    };

    return (
      <View style={pileStyle}>
        <EmptyCardSpace absolute={pile.length > 0} columnWidth={columnWidth} />
        {pile.map((id, index) =>
          <CardContainer id={id} key={index}>
            {data =>
              <View style={index !== pile.length - 1 && (data.isFaceUp ? largeOffsetStyle : smallOffsetStyle)}>
                <Card {...this.props} {...data} />
              </View>
            }
          </CardContainer>
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
