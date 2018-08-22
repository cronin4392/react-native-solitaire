import React from 'react';
import { connect } from 'react-redux';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { createDeck } from '../actions';

import { DECK } from '../constants/cards';
import { shuffle } from '../helpers/cards';

import CardStack from '../components/CardStack';

class DeckContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const deck = shuffle(DECK);
    dispatch(createDeck(deck));
  }

  render() {
    const { deck } = this.props;
    return(
      <View style={styles.playField}>
        {deck && deck.length > 0 ?
          <React.Fragment>
            <CardStack stack={deck} />
            <CardStack stack={[]} />
            <CardStack stack={[]} />
            <CardStack stack={[]} />
          </React.Fragment> :
          <React.Fragment>
            <Text>Loading...</Text>
          </React.Fragment>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  playField: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
  },
});

const mapStateToProps = state => {
  return ({
    deck: state.solitaire.deck
  });
}

export default connect(mapStateToProps)(DeckContainer);