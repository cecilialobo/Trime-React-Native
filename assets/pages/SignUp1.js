
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import LogoSignUp  from '../images/logo-sign-up.svg';
import SignUp1Input from '../components/SignUp1Input.js';
import CircleButton from '../components/CircleButton.js';

import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight } from 'react-native';

export default function SignUp1() {

    console.log('sign up 1')

    return (
      <SafeAreaView style={styles.container}>
       <LogoSignUp style={styles.logo}/>
        <Text style={styles.title}>What are you?</Text>
        <View style={styles.circles}>
          <CircleButton buttonLabel='Trainee'></CircleButton>
          <CircleButton buttonLabel='Trainer'></CircleButton>
        </View>
        <View style={styles.signupContainer}>
          <SignUp1Input label='First Name'/>
          <SignUp1Input label='Last Name'/>
          <SignUp1Input label='E-mail address'/>
          <SignUp1Input secureTextEntry={true} label='Password'/>
        </View>
        <View style={styles.buttonContainer}>
          
            <TouchableHighlight style={[styles.button, styles.signUpBtn]}>
                <Link to="/sign-up-2">
                    <Text style={styles.buttonText}>Next</Text>
                </Link>
            </TouchableHighlight>
          
        </View>
      </SafeAreaView>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    backgroundColor: '#082D4C',
    alignItems: 'center', //horizontal 
  },
  logo: {
    marginTop: 75,
  },
  title: {
    marginTop: 15,
    color: '#fff',
    fontSize: 16,
  },
  circles: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 45,
  },
  signupContainer: {
    flex: 3,
    flexDirection: 'column',
  },
  buttonContainer: {
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
