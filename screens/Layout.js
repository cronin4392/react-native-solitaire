import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const Layout = ({ children }) => (
  <SafeAreaView style={styles.container}>
    { children }
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default Layout;