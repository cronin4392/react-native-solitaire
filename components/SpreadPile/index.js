import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import CardContainer from '../../containers/CardContainer';
import ClickableCard from '../ClickableCard';
import EmptyCardSpace from '../EmptyCardSpace';

import { HORIZONTAL, VERTICAL } from '../../constants/cards';

export default class SpreadPile extends React.PureComponent {
  static defaultProps = {
    direction: VERTICAL,
    columnWidth: null,
  };

  static propTypes = {
    direction: PropTypes.oneOf([VERTICAL, HORIZONTAL]),
    pile: PropTypes.arrayOf(PropTypes.number),
  };

  render() {
    const { columnWidth, direction, pile } = this.props;

    if(!columnWidth) {
      return null;
    }

    const isVertical = direction === VERTICAL;
    const cardWidth = columnWidth;
    const cardHeight = cardWidth * 1.5;

    const pileStyle = isVertical ? styles.pileVertical : styles.pileHorizontal;

    const smallOffsetStyle = isVertical ? {
      marginBottom: (-1 * cardHeight) + 3
    } : {
      marginRight: (-1 * cardWidth) + 3
    };

    const largeOffsetStyle = isVertical ? {
      marginBottom: (-1 * cardHeight) + 20
    } : {
      marginRight: (-1 * cardWidth) + 15
    };

    return (
      <View style={pileStyle}>
        <EmptyCardSpace absolute={pile.length > 0} columnWidth={columnWidth} />
        {pile.map((id, index) =>
          <CardContainer id={id} key={index}>
            {data =>
              <View style={index !== pile.length - 1 && (data.isFaceUp ? largeOffsetStyle : smallOffsetStyle)}>
                <ClickableCard {...this.props} {...data} />
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
