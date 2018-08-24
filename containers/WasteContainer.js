import React from 'react';
import { connect } from 'react-redux';

import SpreadPile from '../components/SpreadPile';

import { HORIZONTAL, WASTE } from '../constants/cards';

const WasteContainer = ({ columnWidth, waste }) => (
  <SpreadPile
    pile={waste.slice(-3)}
    direction={HORIZONTAL}
    columnWidth={columnWidth}
    location={WASTE}
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

export default connect(mapStateToProps)(WasteContainer);