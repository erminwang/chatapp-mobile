import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {baseURL} from './info/info.json';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  tryLogin = () => {
    return fetch(baseURL + "/about")
    .then((response) => response.json())
    .then((resJson) => console.log(resJson))
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="md-person" size={20} color="#000"/>
            <TextInput
              style={styles.input}
              returnKeyType="next"
              onChangeText={(text) => this.setState({email: text})}
              placeholder="E-Mail"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="md-key" size={20} color="#000"/>
            <TextInput
              style={styles.input}
              returnKeyType="go"
              onChangeText={(text) => this.setState({password:text})}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
            />
          </View>

          <Button style={{margin: 20}}
            onPress={this.tryLogin}
            title="LOGIN"
            color="blue"
          />
        </View>

        <View style={{paddingTop: 20}}>
          <Text style={{color: 'blue'}} onPress={()=>this.props.navigation.navigate('Signup')}>Sign up</Text>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchSection: {
    width: 260,
    marginTop: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
      width: 226,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: '#fff',
      color: '#424242',
  }
});
