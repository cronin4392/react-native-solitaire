import { connect } from "react-redux";

import { cardClicked, updateSelectedPosition } from "../actions";

const CardContainer = props => props.children(props);

const mapStateToProps = (state, props) => {
  const { id } = props;
  const { dragger, solitaire } = state;
  const card = solitaire.cards[id];
  const isFaceUp = solitaire.faceup[id] === true;
  const isSelected = !!dragger.selected[id];

  return {
    ...props,
    card,
    isFaceUp,
    isSelected
  };
};

const mapDispatchToProps = dispatch => ({
  onCardClick: payload => dispatch(cardClicked(payload)),
  updateSelectedPosition: payload => dispatch(updateSelectedPosition(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContainer);
