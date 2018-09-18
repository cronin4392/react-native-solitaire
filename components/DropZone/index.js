import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default class DropZone extends React.Component {
  constructor(props) {
    super(props);
    this.dropZoneRef = React.createRef();
  }

  _onDropZoneClick = () => {
    const { location, moveSelectedToLocation } = this.props;

    moveSelectedToLocation(location);
  }

  _onLayout = () => {
    const { onLayout } = this.props;

    onLayout(this.dropZoneRef);
  }

  render() {
    const { active } = this.props;

    /* pointerEvents allows the dropzone to be clicked while elements are selected */
    return (
      <View
        pointerEvents={active ? 'auto' : 'none'}
        style={styles.dropZone}
        ref={this.dropZoneRef}
        onLayout={this._onLayout}
      >
        <TouchableOpacity
          style={styles.dropZoneButton}
          onPressIn={this._onDropZoneClick}
          activeOpacity={1}
        ></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dropZone: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    // backgroundColor: 'rgba(255,0,0,0.3)',
  },
  dropZoneButton: {
    ...StyleSheet.absoluteFillObject,
  },
});
