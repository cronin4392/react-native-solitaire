import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import {
  flipFirstCardUpInPiles,
  generateDeck,
  generatePiles,
  movePickupIntoWaste,
  shuffleDeck
} from '../actions';

import OffField from '../components/OffField';
import PlayField from '../components/PlayField';

class DeckContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(generateDeck());
    dispatch(shuffleDeck());
    dispatch(generatePiles());
    dispatch(flipFirstCardUpInPiles());

    dispatch(movePickupIntoWaste());
  }

  render() {
    const { pickup, piles, waste } = this.props;

    if (!piles || piles.length <= 0) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <Fragment>
        <OffField pickup={pickup} waste={waste} />
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
}

export default connect(mapStateToProps)(DeckContainer);