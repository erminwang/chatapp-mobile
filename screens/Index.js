import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Chats from './Chats';
import Contacts from './Contacts';
import Explore from './Explore';
import Profile from './Profile';

export default createBottomTabNavigator({
  Chats: {
    screen: Chats,
    navigationOptions: {
      tabBarLabel: 'CHATS',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatbubbles" color={tintColor} size={24} />
      )
    }
  },
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      tabBarLabel: 'CONTACTS',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-contacts" color={tintColor} size={24} />
      )
    }
  },
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-globe" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor} size={24} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 }, // for ios
      shadowColor: 'black',  // for ios
      shadowOpacity: 0.5,  // for ios
      elevation: 5  // for android
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
