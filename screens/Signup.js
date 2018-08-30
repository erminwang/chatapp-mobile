import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {baseURL} from './info/info.json';
import DebounceButton from './components/General/DebounceButton';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.permissionGranted = false;
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      iconName: "ios-checkmark-circle",
      iconColor: "green",
      iconOpacity: 0,
      disableSreen: false,
    }
  }

  _storeCookie = async (data) => {
    try {
      await AsyncStorage.setItem('cookie', data);
    } catch (error) {
      console.err(error);
    }
  }

  _retrieveCookie = async () => {
    try {
      const value = await AsyncStorage.getItem('cookie');
      if (value !== null) {
        console.log("displaying cookie");
        console.log("value: " + value);
      } else {
        console.log("no such value");
      }
     } catch (error) {
       console.err(error);
     }
  }

  trySignup = () => {
    this.setState({
      disableSreen: true
    });
    let username = this.state.username;
    let email = this.state.email;
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;
    if(password.length < 6 || password != confirmPassword) {
      alert("Please confirm your password!");
    } else if (!email) {
      alert("Please enter youyr email and username!");
    } else {
      var data = {
        "email": email,
        "password": password
      }
      fetch(baseURL + "/api/users/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
      })
      .then((response) => {
        // console.log(response["headers"]["map"]["x-auth"]);
        // for(var property in response["headers"]){
        //   console.log(property + "---" + response["headers"][property]);
        // }
        if(response["ok"]) {
          this.permissionGranted = true;
        this._storeCookie(JSON.stringify(response["headers"]["map"]["x-auth"]));

        }
      })
      .then(() => {
        if(this.permissionGranted) {
          this._retrieveCookie();
          // let a = AsyncStorage.getItem("cookie").then((val) => console.log("val: " + val));
          // for(var property in a){
          //   console.log(property + "---" + a[property]);
          // }
          this.props.navigation.navigate('Index');
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }

    this.setState({
      disableSreen: false
    });
  }

  setConfirmPassword = (text) => {
    let password = this.state.password;
    let confirmPassword = text;


    if(password.length < confirmPassword.length || !password.startsWith(confirmPassword)) {
      this.setState({
        iconName: "ios-close-circle-outline",
        iconOpacity: 1,
        iconColor: "red"
      });
    } else if (password.length >= 6 && password === confirmPassword){
      this.setState({
        iconName: "ios-checkmark-circle-outline",
        iconOpacity: 1,
        iconColor: "green"
      });
    } else {
      this.setState({
        iconOpacity: 0
      });
    }
    this.setState({
      confirmPassword: confirmPassword
    });
  }

  render() {
    return (
      <View style={styles.container} pointerEvents={this.state.disableSreen ? 'none' : 'auto'}>
        <View>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              returnKeyType="next"
              onChangeText={(text) => this.setState({username: text})}
              placeholder="Userame"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              returnKeyType="next"
              onChangeText={(text) => this.setState({email: text})}
              placeholder="E-Mail"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              returnKeyType="next"
              onChangeText={(text) => this.setState({password:text})}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={{flexDirection:'row'}}>
            <View style={styles.inputBoxConfirmPassword}>
              <TextInput
                style={styles.input}
                returnKeyType="go"
                onChangeText={this.setConfirmPassword}
                secureTextEntry={true}
                placeholder="Confirm Password"
                placeholderTextColor="grey"
                underlineColorAndroid="transparent"
              />
            </View>
            <Icon style={{padding:10, opacity: this.state.iconOpacity}} name={this.state.iconName} size={20} color={this.state.iconColor} />
          </View>

          <DebounceButton isLoading={this.state.disableSreen} color='blue' function={this.trySignup} />
        </View>

        <View style={{paddingTop: 20}}>
          <Text style={{color: 'blue'}} onPress={()=>this.props.navigation.navigate('Login')}>Already have an account? Login</Text>
        </View>
      </View>
    )
  }
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 250,
    backgroundColor: '#fff',
    marginBottom: 16
  },
  inputBoxConfirmPassword: {
    width: 210,
    backgroundColor: '#fff',
    marginBottom: 16
  },
  input: {
    width: 230,
    margin: 5,
    textAlign: 'center'
  }
});
