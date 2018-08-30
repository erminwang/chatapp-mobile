import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

class DebounceButton extends Component {

  constructor(props) {
    super(props);
    // this.state={
    //   buttonDisabled: false
    // }
  }

  pressButton = () => {
    // this.setState({
    //   buttonDisabled: true
    // });

    let p = this.handlePress();

    Promise.all(p)
    .then(() => {
      // Do nothing
    })
    .catch ((e) => {
      console.log(e);
      // this.setState({
      //   buttonDisabled: false
      // });
    })
  }

  handlePress = () => new Promise((resolve, reject) => {
    this.props.function();
  });

  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: this.props.color,
            borderRadius:5,
            padding:10
          }}
          // disabled={this.state.buttonDisabled}
          onPress={this.pressButton}
        >
          <View>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
              }}>
              SIGN UP
            </Text>
          </View>

        </TouchableOpacity>
      </View>
    )
  }
}

export default DebounceButton;
