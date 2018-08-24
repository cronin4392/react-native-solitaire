import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import SpreadPile from '../components/SpreadPile';

import { removeCardWaste } from '../actions';

import { HORIZONTAL } from '../constants/cards';

const WasteContainer = ({ columnWidth, waste, removeCardWaste }) => (
  <SpreadPile
    pile={waste.slice(-3)}
    direction={HORIZONTAL}
    columnWidth={columnWidth}
    onCardClick={removeCardWaste}
  />
);

const mapStateToProps = (state, props) => {
  const { solitaire } = state;
  const { waste } = solitaire;

  return ({
    ...props,
    waste,
  });
};

const mapDispatchToProps = (dispatch) => ({
  removeCardWaste: () => dispatch(removeCardWaste()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WasteContainer);