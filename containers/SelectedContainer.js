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
  const selectedArray = Object.keys(selected).map(key => selected[key]);

  return ({
    ...props,
    selected: selectedArray,
  });
};

export default connect(mapStateToProps)(SelectedContainer);
