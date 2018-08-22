import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { createCards, generateDeck, generatePiles, shuffleDeck } from '../actions';

import { DECK } from '../constants/cards';

import PlayField from '../components/PlayField';

class DeckContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(createCards(DECK));
    dispatch(generateDeck());
    dispatch(shuffleDeck());
    dispatch(generatePiles());
  }

  render() {
    const { piles } = this.props;

    if (!piles || piles.length <= 0) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <PlayField piles={piles} />
    );
  }
}

const mapStateToProps = state => {
  return ({
    piles: state.solitaire.piles,
  });
}

export default connect(mapStateToProps)(DeckContainer);