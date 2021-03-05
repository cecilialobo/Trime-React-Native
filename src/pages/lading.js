import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";

import LogoLanding from '../../assets/images/logo-landing.svg'
import LandingImg from '../../assets/images/landing-image.svg' 


import { StyleSheet, Text, View, Image, SafeAreaView,TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function Home() {

    console.log("Landing page");
 
    const signUp = () => {
      console.log('sign up');
    };
  
    const logIn = () => {
      console.log('log in');
    };

    return (
        <SafeAreaView style={styles.container}>
          <LandingImg style={styles.landingImg}/>
            <LogoLanding style={styles.logo}/>
              <View style={styles.buttonContainer}>
                <TouchableHighlight style={[styles.button, styles.signUpBtn]} underlayColor = {'#05668D'} onPress={signUp}>
                  <Link to="/sign-up-1" underlayColor = {'#05668D'} style={{ height: '100%', width: '100%', borderRadius: 40, flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text style={styles.buttonText}>Sign Up</Text></Link>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.button, styles.logInBtn]} underlayColor = {'#0BD8A7'} onPress={logIn}><Text style={styles.buttonText}>Log In</Text></TouchableHighlight>
              </View>
        </SafeAreaView>
    )
  }
 

const styles = StyleSheet.create({
  container: {
     flex: 1,// takes up the entire screen
    // backgroundColor: '#082D4C',
    alignItems: 'center', //horizontal
    justifyContent: 'space-between',
    zIndex: 100,
    height: '100%',

  },
  landingImg: {
    flex: 1,
    position: 'absolute',
    zIndex: -10,
    top: 0,
    height: null,
    width: null,
    resizeMode: 'stretch',
  },
  logo: {
    marginTop: 125,
    zIndex: 10,
  },
  buttonContainer: {
    position: 'absolute',
    top: 600,
  },
  button: {
    alignItems: 'center', //horizontal
    justifyContent: 'center', 
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
    backgroundColor: ' rgba(11,216,167,0.8)',
  },
  logInBtn: {
    backgroundColor: 'rgba(5,102,141,0.8)',
  }

});