import React from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";

const Layout = ({ children }) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0
  }
});

export default Layout;
