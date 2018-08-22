import React from 'react';
import { connect } from 'react-redux';

import Card from '../components/Card';

const CardContainer = ({ card }) => <Card card={card} />

const mapStateToProps = (state, { cardId }) => {
  const card = state.solitaire.cards[cardId];
  return ({
    card
  });
}

export default connect(mapStateToProps)(CardContainer);