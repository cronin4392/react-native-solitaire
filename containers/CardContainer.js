import React from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card';

const CardContainer = (props) => <Card {...props} />

const mapStateToProps = (state, { cardId }) => {
  const { solitaire } = state;
  const card = solitaire.cards[cardId];
  const faceUp = solitaire.cardsFaceUp[cardId] === true;

  return ({
    card,
    faceUp
  });
}

export default connect(mapStateToProps)(CardContainer);