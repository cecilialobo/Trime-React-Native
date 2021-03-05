import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";

import LogoLanding from '../../assets/images/logo-landing.svg'
import SignIn from '../../assets/images/sign-in.svg'



import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
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
      <>
      <View style={styles.container}>
        <LogoLanding style={styles.logo}/>
          
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.signUpBtn]} onPress={signUp}>
            <Link to="/sign-up-1" underlayColor="gray" style={ styles.link}>
                <Text style={styles.buttonText}>Sign Up</Text></Link>
          </TouchableOpacity>
          <TouchableHighlight style={[styles.button, styles.logInBtn]} onPress={logIn}>
            <Link to="/sign-up-3"><Text style={styles.buttonText}>Log In</Text></Link>
          </TouchableHighlight>
        </View>
        <SignIn style={styles.bgImage}/>

      </View>
      </>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    // backgroundColor: '#082D4C',
    alignItems: 'center', //horizontal
    justifyContent: 'space-between', 
    zIndex: 100,
    height: '100%'
  },
  bgImage: { 
    flex: 1, 
    width: 500, 
    height: '100%', 
    resizeMode:'stretch' ,
    position: 'absolute',
    top: 0,
    zIndex: -1
  },
  logo: {
    marginTop: 138
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
    opacity: 0.8
  },
  link: {
    width:'100%', 
    height: '100%', 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 40
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