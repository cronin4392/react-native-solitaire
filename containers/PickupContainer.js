import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import StackedPile from '../components/StackedPile';

import {
  movePickupIntoWaste,
} from '../actions';

const PickupContainer = ({ columnWidth, pickup, movePickupIntoWaste }) => (
  <TouchableOpacity onPressOut={movePickupIntoWaste} activeOpacity={1}>
    <View pointerEvents={'none'}>
      <StackedPile pile={pickup} columnWidth={columnWidth} />
    </View>
  </TouchableOpacity>
);

const mapStateToProps = (state, props) => {
  const { solitaire } = state;
  const { pickup } = solitaire;

  return ({
    ...props,
    pickup,
  });
};

const mapDispatchToProps = (dispatch) => ({
  movePickupIntoWaste: () => dispatch(movePickupIntoWaste()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PickupContainer);