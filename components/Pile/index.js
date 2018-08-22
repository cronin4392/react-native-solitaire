import React from 'react';
import { StyleSheet, View } from 'react-native';

import CardContainer from '../../containers/CardContainer';
import EmptyCardSpace from '../EmptyCardSpace';

import { cardHeight } from '../Card';

export default class Pile extends React.Component {
  render() {
    const { pile } = this.props;
    return (
      <View style={styles.pile}>
        <EmptyCardSpace absolute={pile.length > 0} />
        {pile.map((card, index) =>
          <View key={index} style={index !== pile.length -1 && styles.pileItem}>
            <CardContainer cardId={card} />
          </View>
        )}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  pile: {
    flexDirection: 'column',
    overflow: 'hidden',
  },
  pileItem: {
    marginBottom: (-1 * cardHeight) + 30
  }
});
