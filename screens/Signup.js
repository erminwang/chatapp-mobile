import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  trySignup = () => {
    this.props.navigation.navigate('Index');
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.searchSection}>
            <TextInput
              style={styles.input}
              returnKeyType="next"
              onChangeText={(text) => this.setState({name: text})}
              placeholder="Name"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.searchSection}>
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

          <View style={styles.searchSection}>
            <TextInput
              style={styles.input}
              returnKeyType="go"
              onChangeText={(text) => this.setState({confirmPassword:text})}
              secureTextEntry={true}
              placeholder="Confirm Password"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
            />
          </View>

          <Button
            onPress={this.trySignup}
            title="SIGN UP"
            color="blue"
          />
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
  searchSection: {
    width: 250,
    backgroundColor: '#fff',
    marginBottom: 16
  },
  input: {
    width: 250,
    margin: 5,
    textAlign: 'center'
  }
});
