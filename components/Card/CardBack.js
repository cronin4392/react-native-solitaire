import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnLayout from 'react-native-on-layout';

const BACK_OFFSET = 2;

const Pattern = () => (
  <Text>Y</Text>
)

const CardBack = () => {
  const patternPositions = [
    {
      top: 0,
      left: 0,
    },
    {
      top: 0,
      right: 0,
      transform: [{scaleX: -1}],
    },
    {
      bottom: 0,
      right: 0,
      transform: [{scaleX: -1}, {scaleY: -1}]
    },
    {
      bottom: 0,
      left: 0,
      transform: [{scaleY: -1}],
    },
  ];

  return (
    <View style={styles.container}>
      <OnLayout style={{ ...StyleSheet.absoluteFillObject }}>
        {({ width, height }) => (
          <Fragment>
            {patternPositions.map((position, index) => (
              <View key={index} style={{
                width: width / 2,
                height: height / 2,
                position: 'absolute',
                ...position,
              }}>

              </View>
            ))}
          </Fragment>
        )}
      </OnLayout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: BACK_OFFSET,
    right: BACK_OFFSET,
    bottom: BACK_OFFSET,
    left: BACK_OFFSET,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 1.5,
  },
});

export default CardBack;
