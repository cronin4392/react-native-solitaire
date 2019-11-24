import React from "react";
import { connect } from "react-redux";

import DropZone from "../components/DropZone";

import { moveSelectedToLocation } from "../actions";

class DropZoneContainer extends React.Component {
  onChildLayout = ref => {
    const { location, registerDropZone } = this.props;
    const node = ref.current;

    node.measure((fx, fy, width, height, px, py) => {
      registerDropZone({
        location,
        width,
        height,
        x: px,
        y: py
      });
    });
  };

  render() {
    return <DropZone {...this.props} onLayout={this.onChildLayout} />;
  }
}

const mapStateToProps = (state, props) => {
  const { dragger } = state;
  const { selected } = dragger;
  const selectedArray = Object.keys(selected);

  return {
    ...props,
    active: selectedArray.length > 0
  };
};

const mapDispatchToProps = dispatch => ({
  moveSelectedToLocation: payload => dispatch(moveSelectedToLocation(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropZoneContainer);
