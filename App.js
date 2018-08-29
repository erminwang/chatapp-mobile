import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Explore from './screens/Explore';
import Chats from './screens/Chats';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';

export default createBottomTabNavigator({
  Chats: {
    screen: Chats,
    navigationOptions: {
      tabBarLabel: 'CHATS',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart-outline" color={tintColor} size={24} />
      )
    }
  },
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      tabBarLabel: 'CONTACTS',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/airbnb.png')} style={{ height: 22, width: 22, tintColor: tintColor }} />
      )
    }
  },
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search-outline" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person-outline" color={tintColor} size={24} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'purple',
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
