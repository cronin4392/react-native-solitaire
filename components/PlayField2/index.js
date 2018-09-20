import React from 'react';

import DraggableCard from '../DraggableCard';

import {
  FOUNDATION_1,
  FOUNDATION_2,
  WASTE
} from '../../constants/cards';

const getCardPosition = (card) => {
  const {
    location,
    locationIndex,
  } = card;

  if (location === WASTE) {
    return { x: 0, y: 0};
  }

  if (location === FOUNDATION_1) {
    return { x: 50, y: (locationIndex * 10) };
  }

  if (location === FOUNDATION_2) {
    return { x: 100, y: (locationIndex * 10) };
  }

  return { x: 0, y: 0 };
}

class PlayField extends React.Component {
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
    const random = Math.floor(Math.random() * 2);
    const randomLocation = [FOUNDATION_1, FOUNDATION_2][random];
    this.props.moveCardToLocation(id, randomLocation);
  }

  render() {
    const { cards } = this.props;

    return cards.map((card, index) => (
      <DraggableCard
        key={index}
        onRelease={this.onRelease}
        position={getCardPosition(card)}
        card={card}
        columnWidth={44}
        />
    ));
  }
};

export default PlayField;