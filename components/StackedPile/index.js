import React from 'react';
import { StyleSheet, View } from 'react-native';

import CardContainer from '../../containers/CardContainer';
import EmptyCardSpace from '../EmptyCardSpace';

import { cardHeight } from '../Card';

export default class StackedPile extends React.Component {
  render() {
    const { pile } = this.props;
    return (
      <View style={styles.pile}>
        <EmptyCardSpace absolute={pile.length > 0} />
        {pile.slice(pile.length - 1).map((card, index) =>
          <View key={index}>
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
});
