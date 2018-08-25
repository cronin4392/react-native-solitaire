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
import PilesContainer from '../containers/PilesContainer';;

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
    return (
      <Fragment>
        <OffField />
        <PilesContainer />
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
