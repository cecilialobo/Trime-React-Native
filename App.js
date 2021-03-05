import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import Home from './src/pages/lading'
import SignUp1 from './src/pages/SignUp1'
import SignUp2 from './src/pages/SignUp2'
import SignUp3 from './src/pages/SignUp3'
import Feed from './src/pages/feed'

export default function App() {

  return (
    <>
    <NativeRouter>
    <Route exact path="/" component={Home} />
    <SafeAreaView style={styles.container}>
      <Route path="/sign-up-1" component={SignUp1} />
      <Route path="/sign-up-2" component={SignUp2} />
      <Route path="/sign-up-3" component={SignUp3} />
      <Route path="/feed" component={Feed} />
    </SafeAreaView>
  </NativeRouter>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    backgroundColor: '#082D4C',
    alignItems: 'center', //horizontal
    justifyContent: 'space-between', 
    overflow: 'scroll'
  },
  logo: {
    marginTop: 125
  },
  buttonContainer: {
    paddingBottom: 125,
  },
  button: {
    alignItems: 'center', //horizontal
    justifyContent: 'center', 

    paddingVertical: 15,
    paddingHorizontal: 40,
    margin: 10,

    borderRadius: 40,

    width: 260,
    height: 73,
  },
  buttonText: {
    fontSize: 30,
    color: "white",
  },
  signUpBtn: {
    backgroundColor: '#0BD8A7',
  },
  logInBtn: {
    backgroundColor: '#05668D',
  }

});
