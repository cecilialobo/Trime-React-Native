import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";

import LogoLanding from '../../assets/images/logo-landing.svg'
import LandingImg from '../../assets/images/landing-image.svg' 

import { StyleSheet, Text, View, Image, SafeAreaView,TouchableHighlight, Button } from 'react-native';
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
        <View style={styles.container}>
          <LandingImg style={styles.landingImg}/>
            <LogoLanding style={styles.logo}/>
              <View style={styles.buttonContainer}>
                <TouchableHighlight style={[styles.button, styles.signUpBtn]} onPress={signUp}>
                  <Link to="/sign-up-1"><Text style={styles.buttonText}>Sign Up</Text></Link>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.button, styles.logInBtn]} onPress={logIn}><Text style={styles.buttonText}>Log In</Text></TouchableHighlight>
              </View>
        </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
     flex: 1,// takes up the entire screen
    // backgroundColor: '#082D4C',
    alignItems: 'center', //horizontal
    justifyContent: 'space-between',

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