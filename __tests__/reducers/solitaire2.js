import solitaire2 from '../../reducers/solitaire2';

const cardsInWaste = {
  0: {
    id: 0,
    pip: 'ACE',
    location: 'WASTE',
    locationIndex: 2,
  },
  1: {
    id: 1,
    pip: 'TWO',
    location: 'WASTE',
    locationIndex: 1,
  },
  2: {
    id: 2,
    pip: 'THREE',
    location: 'WASTE',
    locationIndex: 0,
  }
};

describe('solitaire2 reducer', () => {
  it('should move bottom card to location', () => {
    expect(
      solitaire2({
        cards : cardsInWaste,
      }, {
        type: 'MOVE_CARD_TO_LOCATION',
        id: 0,
        location: 'FOUNDATION_1'
      })
    ).toEqual({
      cards: {
        ...cardsInWaste,
        0: {
          ...cardsInWaste[0],
          location: 'FOUNDATION_1',
          locationIndex: 0,
        },
      }
    });
  });
  it('should move middle card to location with bottom card', () => {
    expect(
      solitaire2({
        cards : cardsInWaste,
      }, {
        type: 'MOVE_CARD_TO_LOCATION',
        id: 1,
        location: 'FOUNDATION_1'
      })
    ).toEqual({
      cards: {
        ...cardsInWaste,
        0: {
          ...cardsInWaste[0],
          location: 'FOUNDATION_1',
          locationIndex: 1,
        },
        1: {
          ...cardsInWaste[1],
          location: 'FOUNDATION_1',
          locationIndex: 0,
        },
      }
    });
  });
  it('should move top card to location with all cards', () => {
    expect(
      solitaire2({
        cards : cardsInWaste,
      }, {
        type: 'MOVE_CARD_TO_LOCATION',
        id: 2,
        location: 'FOUNDATION_1'
      })
    ).toEqual({
      cards: {
        ...cardsInWaste,
        0: {
          ...cardsInWaste[0],
          location: 'FOUNDATION_1',
          locationIndex: 2,
        },
        1: {
          ...cardsInWaste[1],
          location: 'FOUNDATION_1',
          locationIndex: 1,
        },
        2: {
          ...cardsInWaste[2],
          location: 'FOUNDATION_1',
          locationIndex: 0,
        },
      }
    });
  });
});

// it('works', () => {
//   expect({ 1: "a", 2: "b" }).toEqual({2: "b", 1: "a"});
// });