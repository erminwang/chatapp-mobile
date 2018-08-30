import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

class Chats extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Chats</Text>
      </View>
    )
  }
}

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
