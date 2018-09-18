/*
  Keeps track of dropZones and their positions.
  Has method thats fired when dragger is released 
  to determine which dropzone was released on top of.
*/
import React from 'react';
import { connect } from 'react-redux';

import { deselectAllCards, moveSelectedToLocation } from '../actions';

class DropZonesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.dropZones = {};
  }

  _registerDropZone = (dropZone) => {
    const { dropZones } = this;
    const { location } = dropZone;

    this.dropZones = {
      ...dropZones,
      [location]: dropZone,
    };
  }

  _detectDropZoneRelease = (position) => {
    const { moveSelectedToLocation } = this.props;
    const { dropZones } = this;
    const dropZonesInRelease = Object.keys(dropZones)
      .filter(key => {
        const zone = dropZones[key];
        const { width, height, x, y } = zone;

        const top = y;
        const right = x + width;
        const bottom = y + height;
        const left = x;

        const inXBounds = position.x >= left && position.x <= right;
        const inYBounds = position.y >= top && position.y <= bottom;

        return inXBounds && inYBounds;
      });

    if (dropZonesInRelease.length > 0) {
      return moveSelectedToLocation(dropZonesInRelease[0]);
    }

    return deselectAllCards();
  }

  render() {
    return this.props.children({
      registerDropZone: this._registerDropZone,
      detectDropZoneRelease: this._detectDropZoneRelease,
    });
  }
}

const mapDispatchToProps = (dispatch) => ({
  deselectAllCards: () => dispatch(deselectAllCards()),
  moveSelectedToLocation: payload => dispatch(moveSelectedToLocation(payload)),
});

export default connect(null, mapDispatchToProps)(DropZonesContainer);