import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import OnLayout from 'react-native-on-layout';

export default class Column extends React.Component {
  static defaultProps = {
    padding: 0,
  };

  render() {
    const {
      columns,
      columnSpan,
      padding,
      ...props
    } = this.props;

    const columnWidth = (Dimensions.get('window').width / columns) - 0.000001;

    const styles = {
      width: columnWidth * columnSpan,
      padding: padding / 2,
    };

    return (
      <View {...props} style={styles}>
        <OnLayout>
          {({ width }) => (
            this.props.children({
              columnWidth: ((width - (padding * (columnSpan - 1))) / columnSpan)
            })
          )}
        </OnLayout>
      </View>
    );
  }
}