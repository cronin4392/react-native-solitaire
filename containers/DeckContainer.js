import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import {
  flipFirstCardUpInPiles,
  generateDeck,
  generatePiles,
  shuffleDeck
} from '../actions';

import OffField from '../components/OffField';
import PlayField from '../components/PlayField';

import LocationContainer from '../containers/LocationContainer';

import { PILES } from '../constants/cards';

class DeckContainer extends React.PureComponent {
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
    return (
      <Fragment>
        <OffField />
        <LocationContainer location={'piles'}>
          {({ cards }) => <PlayField piles={cards} />}
        </LocationContainer>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  flipFirstCardUpInPiles: () => dispatch(flipFirstCardUpInPiles()),
  generateDeck: () => dispatch(generateDeck()),
  generatePiles: () => dispatch(generatePiles()),
  shuffleDeck: () => dispatch(shuffleDeck()),
});

export default connect(
  null,
  mapDispatchToProps
)(DeckContainer);
