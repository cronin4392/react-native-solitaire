import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default class DropZone extends React.Component {
  constructor(props) {
    super(props);
    this.dropZoneRef = React.createRef();
  }

  _onDropZoneClick = () => {
    const { location, onDropzoneClick } = this.props;

    onDropzoneClick(location);
  }

  _onLayout = () => {
    const { onLayout } = this.props;

    onLayout(this.dropZoneRef);
  }

  render() {
    const { active } = this.props;

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
