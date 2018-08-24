import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import {
  flipFirstCardUpInPiles,
  flipCardUp,
  generateDeck,
  generatePiles,
  movePickupIntoWaste,
  shuffleDeck
} from '../actions';

import OffField from '../components/OffField';
import PlayField from '../components/PlayField';

class DeckContainer extends React.Component {
  componentDidMount() {
    const {
      flipFirstCardUpInPiles,
      generateDeck,
      generatePiles,
      shuffleDeck,
    } = this.props;

    generateDeck();
    shuffleDeck();
    generatePiles();
    flipFirstCardUpInPiles();
  }

  render() {
    const {
      pickup,
      piles,
      waste,
      movePickupIntoWaste,
    } = this.props;

    if (!piles || piles.length <= 0) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <Fragment>
        <OffField
          pickup={pickup}
          waste={waste}
          onPickupPress={movePickupIntoWaste}
        />
        <PlayField piles={piles} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { solitaire } = state;
  const { pickup, piles, waste } = solitaire;
  return ({
    pickup,
    piles,
    waste,
  });
};

const mapDispatchToProps = (dispatch) => ({
  flipFirstCardUpInPiles: () => dispatch(flipFirstCardUpInPiles()),
  generateDeck: () => dispatch(generateDeck()),
  generatePiles: () => dispatch(generatePiles()),
  shuffleDeck: () => dispatch(shuffleDeck()),
  movePickupIntoWaste: () => dispatch(movePickupIntoWaste()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckContainer);