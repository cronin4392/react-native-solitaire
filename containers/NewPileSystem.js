import React from 'react';
import { connect } from 'react-redux';

import DraggableCard from '../components/DraggableCard';

import {
  moveCardToLocation
} from '../actions/solitaire2';

import {
  FOUNDATION_1,
  WASTE
} from '../constants/cards';

import {
  toArray
} from '../helpers/cards';

const getCardPosition = (card) => {
  const {
    location,
  } = card;

  if (location === WASTE) {
    return { x: 0, y: 0};
  }

  return { x: 100, y: 100 };
}

class NewPileSystem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: {
        x: 0,
        y: 300
      },
    };
  }

  onRelease = (id) => {
    this.props.moveCardToLocation(id, FOUNDATION_1);
  }

  render() {
    const { cards } = this.props;

    return cards.map((card, index) => (
      <DraggableCard key={index} onRelease={this.onRelease} position={getCardPosition(card)} card={card} columnWidth={44} />
    ));
  }
};

const mapStateToProps = (state, props) => {
  const { solitaire2 } = state;
  const { cards } = solitaire2;

  const cardsArray = toArray(cards);

  return ({
    ...props,
    cards: cardsArray,
  });
};

const mapDispatchToProps = (dispatch) => ({
  moveCardToLocation: (id, location) => dispatch(moveCardToLocation(id, location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPileSystem);