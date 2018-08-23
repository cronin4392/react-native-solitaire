import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CardContainer from '../../containers/CardContainer';
import EmptyCardSpace from '../EmptyCardSpace';

export default class StackedPile extends React.Component {
  render() {
    const { pile } = this.props;
    return (
      <View style={styles.pile}>
        <View style={styles.debugOverlay} pointerEvents={'none'}>
          <View style={styles.debugOverlayInner}>
            <Text style={styles.debugOverlayText}>{pile.length} cards</Text>
          </View>
        </View>
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
  debugOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  debugOverlayInner: {
    padding: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.85)'
  },
  debugOverlayText: {
    fontFamily: 'Menlo-Regular',
    fontSize: 9,
    lineHeight: 9,
    textAlign: 'center',
  },
});
