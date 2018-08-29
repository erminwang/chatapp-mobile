import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Contacts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Contacts</Text>
      </View>
    )
  }
}

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
