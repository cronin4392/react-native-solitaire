import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import OnLayout from 'react-native-on-layout';

export default class Column extends React.Component {
  render() {
    const {
      columns,
      columnSpan,
      render,
      ...props
    } = this.props;

    const styles = {
      width: ((Dimensions.get('window').width / columns) - 0.000001) * columnSpan,
    };

    return (
      <View {...props} style={styles}>
        <OnLayout>
          {({ width }) => (
            render({
              columnWidth: width / columnSpan
            })
          )}
        </OnLayout>
      </View>
    );
  }
}