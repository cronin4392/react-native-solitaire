import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { MONOSPACE_FONT } from "../../constants/styles";

const EmptyCardSpace = ({ absolute, columnWidth }) => (
  <View
    style={[
      absolute ? styles.emptyCardSpaceAbsolute : styles.emptyCardSpace,
      {
        width: columnWidth,
        height: columnWidth * 1.5
      }
    ]}
  >
    {/* <Text style={styles.emptyCardText}>empty</Text> */}
  </View>
);

const defaultStyles = {
  backgroundColor: "#efefef",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 3
};

const styles = StyleSheet.create({
  emptyCardSpace: {
    ...defaultStyles
  },
  emptyCardSpaceAbsolute: {
    ...defaultStyles,
    position: "absolute"
  },
  emptyCardText: {
    fontFamily: MONOSPACE_FONT,
    fontSize: 11,
    lineHeight: 11,
    color: "#ccc"
  }
});

export default EmptyCardSpace;
