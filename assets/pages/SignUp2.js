
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";

import LogoSignUp  from '../images/logo-sign-up.svg';

import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function SignUp2() {
    console.log('sign up 2')
    return (
      <View style={styles.container}>
        <LogoSignUp style={styles.logo}/>
   
        <View style={styles.buttonContainer}>
          
            <TouchableHighlight style={[styles.button, styles.signUpBtn]}>
                <Link to="/sign-up-3">
                    <Text style={styles.buttonText}>Next</Text>
                </Link>
            </TouchableHighlight>
          
        </View>
      </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    backgroundColor: '#082D4C',
    alignItems: 'center', //horizontal 
  },
  logo: {
    marginTop: 125
  },
  buttonContainer: {
    flex: 1,
    paddingBottom: 125,
    justifyContent: 'flex-end',
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
