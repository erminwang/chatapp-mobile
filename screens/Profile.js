import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Log out" onPress={()=>this.props.navigation.navigate('Login')} />
      </View>
    )
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
