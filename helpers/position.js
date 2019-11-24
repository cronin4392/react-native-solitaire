import {
  FOUNDATION_1,
  FOUNDATION_2,
  FOUNDATION_3,
  FOUNDATION_4,
  PICKUP,
  PILE_1,
  PILE_2,
  PILE_3,
  PILE_4,
  PILE_5,
  PILE_6,
  PILE_7,
  WASTE
} from "../constants/cards";

export const subtract = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => {
  return {
    x: x1 - x2,
    y: y1 - y2
  };
};

export const XY_POSITIONS = {
  [PICKUP]: {
    x: 0,
    y: 0,
    width: 44,
    height: 60
  },
  [WASTE]: {
    x: 50,
    y: 0,
    width: 44,
    height: 60
  },
  [FOUNDATION_1]: {
    x: 150,
    y: 0,
    width: 44,
    height: 60
  },
  [FOUNDATION_2]: {
    x: 200,
    y: 0,
    width: 44,
    height: 60
  },
  [FOUNDATION_3]: {
    x: 250,
    y: 0,
    width: 44,
    height: 60
  },
  [FOUNDATION_4]: {
    x: 300,
    y: 0,
    width: 44,
    height: 60
  },
  [PILE_1]: {
    x: 0,
    y: 70,
    width: 44,
    height: 60
  },
  [PILE_2]: {
    x: 50,
    y: 70,
    width: 44,
    height: 60
  },
  [PILE_3]: {
    x: 100,
    y: 70,
    width: 44,
    height: 60
  },
  [PILE_4]: {
    x: 150,
    y: 70,
    width: 44,
    height: 60
  },
  [PILE_5]: {
    x: 200,
    y: 70,
    width: 44,
    height: 60
  },
  [PILE_6]: {
    x: 250,
    y: 70,
    width: 44,
    height: 60
  },
  [PILE_7]: {
    x: 300,
    y: 70,
    width: 44,
    height: 60
  }
};

export const getLocation = ({ x, y }) => {
  const location = Object.keys(XY_POSITIONS).find(key => {
    const position = XY_POSITIONS[key];
    return (
      x <= position.x + position.width && y <= position.y + position.height
    );
  });

  return location;
};
