import React from "react";
import { View } from "react-native";

import DraggableCard from "../DraggableCard";

import {
  PILE_1,
  PILE_2,
  PILE_3,
  PILE_4,
  PILE_5,
  PILE_6,
  PILE_7,
  PILE_8,
  PILE_9
} from "../../constants/cards";
import { subtract, getLocation, XY_POSITIONS } from "../../helpers/position";

const getCardPosition = card => {
  const { location, locationIndex } = card;
  const xyPosition = XY_POSITIONS[location];

  if (
    [
      PILE_1,
      PILE_2,
      PILE_3,
      PILE_4,
      PILE_5,
      PILE_6,
      PILE_7,
      PILE_8,
      PILE_9
    ].includes(location)
  ) {
    return {
      x: xyPosition.x,
      y: xyPosition.y + locationIndex * 10
    };
  }
  return {
    x: xyPosition.x,
    y: xyPosition.y
  };
};

class PlayField extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();

    this.state = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }

  onLayout = () => {
    const node = this.ref.current;
    node.measure((x, y, width, height) => {
      this.setState({
        width,
        height,
        x,
        y
      });
    });
  };

  onCardRelease = ({ id, x, y }) => {
    const location = getLocation(
      subtract({ x, y }, { x: this.state.x, y: this.state.y })
    );
    if (location) {
      this.props.moveCardToLocation(id, location);
    }
  };

  render() {
    const { cards } = this.props;

    return (
      <View
        ref={this.ref}
        onLayout={this.onLayout}
        style={{
          flex: 1
        }}
      >
        {cards.map((card, index) => (
          <DraggableCard
            key={index}
            onRelease={this.onCardRelease}
            position={getCardPosition(card)}
            card={card}
            columnWidth={44}
          />
        ))}
      </View>
    );
  }
}

export default PlayField;
