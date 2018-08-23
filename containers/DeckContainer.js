import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import {
  flipFirstCardInPiles,
  generateDeck,
  generatePiles,
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
    dispatch(flipFirstCardInPiles());
  }

  render() {
    const { pickup, piles } = this.props;

    if (!piles || piles.length <= 0) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <Fragment>
        <OffField pickup={pickup} />
        <PlayField piles={piles} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { solitaire } = state;
  return ({
    pickup: solitaire.pickup,
    piles: solitaire.piles,
  });
}

export default connect(mapStateToProps)(DeckContainer);