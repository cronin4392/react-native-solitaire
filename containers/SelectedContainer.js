import React from 'react';
import { connect } from 'react-redux';

class SelectedContainer extends React.Component {
  render() {
    return this.props.children(this.props);
  }
};

const mapStateToProps = (state, props) => {
  const { solitaire } = state;
  const { selected } = solitaire;
  const isSelected = Object.keys(selected).reduce((acc, val) => {
    if (!!selected[val]) {
      return true;
    }
    return acc;
  }, false);

  return ({
    ...props,
    selected: isSelected,
  });
};

export default connect(mapStateToProps)(SelectedContainer);