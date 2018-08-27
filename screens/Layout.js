import React from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

const Layout = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollingField} alwaysBounceVertical={false}>
      { children }
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  safeZone: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  scrollingField: {
    flex: 1,
    // paddingTop: 25,
  },
});

export default Layout;