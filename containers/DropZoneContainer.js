import React, { Fragment } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import DropZone from '../components/DropZone';

import { moveSelectedToLocation, registerDropZone } from '../actions';

class DropZoneContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  onChildLayout = (ref) => {
    const { location, registerDropZone } = this.props;
    const node = ref.current;

    node.measure((fx, fy, width, height, px, py) => {
      registerDropZone({
        location,
        width,
        height,
        px,
        py
      });
    });
  }

  render() {
    return (
      <Fragment>
        <View ref={this.testRef} />
        <DropZone {...this.props} ref={this.dropZoneRef} onLayout={this.onChildLayout} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerDropZone: data => dispatch(registerDropZone(data)),
  onDropzoneClick: zone => dispatch(moveSelectedToLocation(zone))
});

export default connect(null, mapDispatchToProps)(DropZoneContainer);
