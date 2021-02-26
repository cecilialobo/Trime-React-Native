import React from 'react';
import { Link } from "react-router-native";
import Slider from '@react-native-community/slider';

import LogoSignUp  from '../images/logo-sign-up.svg';
import SignUp2Input from '../components/SignUp2Input.js';

import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight } from 'react-native';
import WorkOutPlaces from '../components/WorkOutPlaces';

export default function SignUp2() {
    console.log('sign up 2');

    return (
      <SafeAreaView style={styles.container}>
        <LogoSignUp style={styles.logo}/>
        <Text style={styles.subtitle}>Time to set up your profile</Text>
        
        <View style={styles.inputBlock}>
          <SignUp2Input label='Age:' />
          <SignUp2Input label='Height:'/>
        </View>
        <View style={styles.inputBlock}>
          <SignUp2Input label='Gender:'/>
          <SignUp2Input label='Weight:'/>
        </View>

        <Text style={styles.textTitle}>Level of training:</Text>

        <Slider
          style={{width: 340, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor='#0BD8A7'
          maximumTrackTintColor='#0BD8A7'
          thumbTintColor='#0BD8A7'
        />

        <View style={{flexDirection: 'row', width: 380, justifyContent: 'space-around'}}>
          <Text style={{color: '#fff'}}>Beginner</Text>
          <Text style={{color: '#fff'}}>Intermediate</Text>
          <Text style={{color: '#fff'}}>Pro</Text>
        </View>

        <Text style={styles.textTitle}>Where do you want to work out:</Text>
        
        <View style={{flexDirection: 'row', width: 380, justifyContent: 'space-around', marginTop: 15, marginBottom: 40}}>
          <WorkOutPlaces place='IRL'/>
          <WorkOutPlaces place='Both'/>
          <WorkOutPlaces place='Online'/>
        </View>

        <View style={styles.buttonContainer}>
            <TouchableHighlight style={[styles.button, styles.signUpBtn]}>
                <Link to="/sign-up-3">
                    <Text style={styles.buttonText}>Next</Text>
                </Link>
            </TouchableHighlight>
        </View>
      </SafeAreaView>
    )
  }
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#082D4C',
    alignItems: 'center', 
  },
  logo: {
    marginTop: 76,
  },
  subtitle: {
    marginTop: 15,
    color: '#fff',
    fontSize: 16,
  },
  inputBlock: {
    flex: 0.3,
    flexDirection: 'row',
    paddingLeft: 15,
    width: 346,
  },
  textTitle: {
    color: '#fff',  
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 50,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center', //horizontal
    justifyContent: 'center', 

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
