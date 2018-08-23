import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import {
  flipFirstCardInPiles,
  generateDeck,
  generatePiles,
  shuffleDeck
} from '../actions';

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