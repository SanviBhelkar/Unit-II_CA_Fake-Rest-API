import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Header Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Header;
