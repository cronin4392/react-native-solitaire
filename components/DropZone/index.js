import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default class DropZone extends React.Component {
  _onDropZoneClicked = () => {
    const { location, onDropzoneClick } = this.props;

    onDropzoneClick(location);
  }

  render() {
    const { selected } = this.props;

    return (
      <View
        pointerEvents={selected ? 'auto' : 'none'}
        style={styles.dropZone}
      >
        <TouchableOpacity
          style={styles.dropZoneButton}
          onPress={this._onDropZoneClicked}
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
    // backgroundColor: '#f00',
  },
  dropZoneButton: {
    ...StyleSheet.absoluteFillObject,
  },
});