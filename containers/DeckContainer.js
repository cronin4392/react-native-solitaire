import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { createDeck } from '../actions';

import { DECK } from '../constants/cards';
import { shuffle } from '../helpers/cards';

import PlayField from '../components/PlayField';

class DeckContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const deck = shuffle(DECK);
    dispatch(createDeck(deck));
  }

  render() {
    const { deck } = this.props;

    if (!deck || deck.length <= 0) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <PlayField deck={deck} />
    );
  }
}

const mapStateToProps = state => {
  return ({
    deck: state.solitaire.deck
  });
}

export default connect(mapStateToProps)(DeckContainer);