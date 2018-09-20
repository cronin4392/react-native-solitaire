import { connect } from 'react-redux';

import {
  toArray
} from '../helpers/cards';

import {
  moveCardToLocation
} from '../actions/solitaire2';

const CardsContainer = (props) => props.children(props);

const mapStateToProps = (state) => {
  const { solitaire2 } = state;
  const { cards } = solitaire2;

  const cardsArray = toArray(cards);

  return ({
    cards: cardsArray,
  });
};

const mapDispatchToProps = (dispatch) => ({
  moveCardToLocation: (id, location) => dispatch(moveCardToLocation(id, location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
