import solitaire2 from '../../reducers/solitaire2';

describe('solitaire2 reducer', () => {
  it('should move card to location', () => {
    expect(
      solitaire2({
        cards : {
          0: {
            pip: 'ACE',
            location: 'WASTE',
            locationIndex: 0,
          },
          1: {
            pip: 'TWO',
            location: 'WASTE',
            locationIndex: 1,
          }
        }
      }, {
        type: 'MOVE_CARD_TO_LOCATION',
        id: 0,
        location: 'WASTE'
      })
    ).toEqual({
      cards: {
        0: {
          pip: 'ACE',
          location: 'WASTE',
          locationIndex: 0,
        },
        1: {
          pip: 'TWO',
          location: 'WASTE',
          locationIndex: 1,
        }
      }
    });
  });
});

it('works', () => {
  expect(1).toBe(1);
});