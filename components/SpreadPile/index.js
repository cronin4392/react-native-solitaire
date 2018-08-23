import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import CardContainer from '../../containers/CardContainer';
import EmptyCardSpace from '../EmptyCardSpace';

import { cardHeight, cardWidth } from '../Card';

import { HORIZONTAL, VERTICAL } from '../../constants/cards';

export default class SpreadPile extends React.Component {
  static defaultProps = {
    direction: VERTICAL,
  };

  static propTypes = {
    direction: PropTypes.oneOf([VERTICAL, HORIZONTAL])
  };

  render() {
    const { direction, pile } = this.props;

    const pileStyle = direction === VERTICAL ? styles.pileVertical : styles.pileHorizontal;
    const pileItemStyle = direction === VERTICAL ? styles.pileItemVertical : styles.pileItemHorizontal;

    return (
      <View style={pileStyle}>
        <EmptyCardSpace absolute={pile.length > 0} />
        {pile.map((card, index) =>
          <View key={index} style={index !== pile.length - 1 && pileItemStyle}>
            <CardContainer cardId={card} />
          </View>
        )}
      </View>
    )
  }
};

const SPREAD_OFFSET = 20;

const styles = StyleSheet.create({
  pileVertical: {
    flexDirection: 'column',
    overflow: 'hidden',
  },
  pileHorizontal: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  pileItemVertical: {
    marginBottom: (-1 * cardHeight) + SPREAD_OFFSET
  },
  pileItemHorizontal: {
    marginRight: (-1 * cardWidth) + SPREAD_OFFSET
  },
});
