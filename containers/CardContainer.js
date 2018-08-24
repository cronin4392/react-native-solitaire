import React from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card';

const CardContainer = (props) => <Card {...props} />

const mapStateToProps = (state, props) => {
  const { cardId } = props;
  const { solitaire } = state;
  const card = solitaire.cards[cardId];
  const faceUp = solitaire.isFaceUp[cardId] === true;

  return ({
    ...props,
    card,
    faceUp
  });
}

export default connect(mapStateToProps)(CardContainer);