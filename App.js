import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createSwitchNavigator} from 'react-navigation';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Index from './screens/Index';

export default class App extends React.Component {
  render() {
    return (
      <AppSwitchNavigator />
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Login: Login,
  Signup: Signup,
  Index: Index
}, {
  navigationOptions: {
    header: null,
    gesturesEnabled: false,

  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
