import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import CardContainer from '../../containers/CardContainer';
import ClickableCard from '../ClickableCard';
import EmptyCardSpace from '../EmptyCardSpace';

import { MONOSPACE_FONT } from '../../constants/styles';

export default class StackedPile extends React.PureComponent {
  static defaultProps = {
    columnWidth: null,
  };

  static propTypes = {
    pile: PropTypes.arrayOf(PropTypes.number),
  };

  render() {
    const { columnWidth, pile } = this.props;

    if(!columnWidth) {
      return null;
    }

    return (
      <View style={styles.pile}>
        {/*<View style={styles.debugOverlay} pointerEvents={'none'}>
          <View style={styles.debugOverlayInner}>
            <Text style={styles.debugOverlayText}>{pile.length} cards</Text>
          </View>
        </View>*/}
        <EmptyCardSpace absolute={pile.length > 0} columnWidth={columnWidth} />
        {pile.slice(pile.length - 2).map((id, index) =>
          <View key={index} style={index > 0 && styles.pileCard}>
            <CardContainer id={id}>
              {data => <ClickableCard {...this.props} {...data} />}
            </CardContainer>
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
  pileCard: {
    ...StyleSheet.absoluteFillObject,
  },
  debugOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  debugOverlayText: {
    fontFamily: MONOSPACE_FONT,
    fontSize: 9,
    lineHeight: 9,
    textAlign: 'center',
  },
});
