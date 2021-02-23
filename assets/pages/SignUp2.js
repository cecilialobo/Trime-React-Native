import React from 'react';
import { Link } from "react-router-native";

import LogoSignUp  from '../images/logo-sign-up.svg';
import SignUp2Input from '../components/SignUp2Input.js';

import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight } from 'react-native';

export default function SignUp2() {
    console.log('sign up 2');

    return (
      <SafeAreaView style={styles.container}>
        <LogoSignUp style={styles.logo}/>
        <Text style={styles.subtitle}>Time to set up your profile</Text>
        
        <View style={styles.inputBlock}>
          <SignUp2Input label='Age:'/>
          <SignUp2Input label='Height:'/>
        </View>
        <View style={styles.inputBlock}>
          <SignUp2Input label='Gender:'/>
          <SignUp2Input label='Weight:'/>
        </View>

        <Text>Level of training:</Text>

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
    justifyContent: 'space-around',
    //backgroundColor: 'pink',
    width: 335,
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
