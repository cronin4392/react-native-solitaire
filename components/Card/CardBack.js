import React, { Fragment } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import CardBackImage from "../../assets/images/CardBack.png";

const BACK_OFFSET = 2;

const patternPositions = [
  {
    top: 0,
    left: 0
  },
  {
    top: 0,
    right: 0,
    transform: [{ scaleX: -1 }]
  },
  {
    bottom: 0,
    right: 0,
    transform: [{ scaleX: -1 }, { scaleY: -1 }]
  },
  {
    bottom: 0,
    left: 0,
    transform: [{ scaleY: -1 }]
  }
];

const Pattern = () => <Text>Y</Text>;

const GridPattern = ({ width, height }) => (
  <Fragment>
    {patternPositions.map((position, index) => (
      <View
        key={index}
        style={{
          width: width / 2,
          height: height / 2,
          position: "absolute",
          ...position
        }}
      >
        <Pattern />
      </View>
    ))}
  </Fragment>
);

class DotPattern extends React.PureComponent {
  drawDot({ index, size, spacing }) {
    const dotStyle = {
      height: size,
      width: size,
      backgroundColor: "#000",
      borderRadius: size / 2,
      margin: spacing / 2
    };

    return <View key={index} style={dotStyle}></View>;
  }

  render() {
    const { width, height } = this.props;
    const size = 2;
    const spacing = 4;

    const fullSpace = size + spacing;
    const countX = Math.floor(width / fullSpace);
    const countY = Math.floor(height / fullSpace);

    return (
      <View style={styles.dotContainer}>
        {[...Array(countX).keys()].map(x => (
          <View style={styles.dotInnerContainer} key={x}>
            {[...Array(countY).keys()].map(y =>
              this.drawDot({
                index: y,
                size,
                spacing
              })
            )}
          </View>
        ))}
      </View>
    );
  }
}

const CardBack = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={CardBackImage}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: BACK_OFFSET,
    right: BACK_OFFSET,
    bottom: BACK_OFFSET,
    left: BACK_OFFSET,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 1.5
  },
  dotContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  dotInnerContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default CardBack;
