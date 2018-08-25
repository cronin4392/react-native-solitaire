import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default class DropZone extends React.PureComponent {
  _onDropZoneClick = () => {
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
          onPress={this._onDropZoneClick}
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
    backgroundColor: 'rgba(255,0,0,0.3)',
  },
  dropZoneButton: {
    ...StyleSheet.absoluteFillObject,
  },
});
