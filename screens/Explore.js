import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, Platform, StatusBar, ScrollView, Dimensions, Animated } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Category from './components/Explore/Category';
import Home from './components/Explore/Home';
import Tag from './components/Explore/Tag';

const { height, width } = Dimensions.get('window');

class Explore extends Component {

  componentWillMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 80;
    this.endHeaderHeight = 50;
    if(Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: 'clamp'
    });

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });

    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 10],
      extrapolate: 'clamp'
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1}}>

          <Animated.View style={{height:this.animatedHeaderHeight, backgroundColor:'white', borderBottomWidth:1, borderBottomColor:'#dddddd'}}>
            <View style={{flexDirection:'row', padding:10, backgroundColor:'white', marginHorizontal:20,
              shadowOffset:{ width:0, height:0 }, shadowColor:'black', shadowOpacity: 0.2, // for ios
              elevation:1, // for android
              marginTop: Platform.OS == 'android' ? 30 : null
            }}>
              <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
              <TextInput underlineColorAndroid="transparent" placeholder="Try Guangzhou" placeholderTextColor="grey" style={{ flex:1, fontWeight:'700',backgroundColor:'white'}} />
            </View>

            <Animated.View style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity }}>
              <Tag name="Guests" />
              <Tag name="Dates" />
            </Animated.View>
          </Animated.View>

          <ScrollView scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {contentOffset: {y:this.scrollY}}
                }
              ]
            )}
          >
            <View style={{ flex:1, backgroundColor:'white', paddingTop:20}}>

              <Text style={{ fontSize:24, fontWeight:'700', paddingHorizontal:20}}>
                What can we help you find?
              </Text>

              <View style={{height:130, marginTop:20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('../assets/home.jpg')} name="Home"/>
                  <Category imageUri={require('../assets/experiences.jpg')} name="Experiences"/>
                  <Category imageUri={require('../assets/restaurant.jpg')} name="Restaurant"/>
                </ScrollView>
              </View>

              <View style={{marginTop:40, paddingHorizontal:20}}>
                <Text style={{fontSize:24, fontWeight:'700'}}>
                  Introducing Airbnb Plus
                </Text>
                <Text style={{fontSize:10, fontWeight:'100'}}>
                  A new selection of homes verified for quality & comfort
                </Text>

                <View style={{width:width-40, height:200, marginTop: 20}}>
                  <Image source={require('../assets/home.jpg')} style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5, borderWidth:1, borderColor:'#dddddd'}} />
                </View>
              </View>

            </View>

            <View style={{ marginTop: 40}}>
              <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal:20 }}>Homes around the world</Text>
              <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <Home isHidden={false} width={width} name="The Cozy Place" type="PRIVATE ROOM - 2 BEDS" price={82} rating={8} />
                <Home isHidden={false} width={width} name="Dragon Palace" type="PRIVATE ROOM - 4 BEDS" price={90} rating={9} />
                <Home isHidden={false} width={width} name="A garden of love" type="PRIVATE ROOM - 1 BED" price={312} rating={2} />
              </View>
            </View>
          </ScrollView>

        </View>
      </SafeAreaView>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
