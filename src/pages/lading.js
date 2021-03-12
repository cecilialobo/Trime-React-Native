import React from 'react';
import { Link } from "react-router-native";
import { StyleSheet, Dimensions, Text, View, SafeAreaView,TouchableHighlight } from 'react-native';

import LogoLanding from '../../assets/images/logo-landing.svg'
import LandingImg from '../../assets/images/landing-image.svg' 

const { width, height } = Dimensions.get('window');

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
          <LandingImg style={styles.landingImg} width={width + 100} heigth={height + 100}/>
            <LogoLanding style={styles.logo} />
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
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'space-evenly',
    zIndex: 9,
    height: height,
  },
  landingImg: {
    flex: 1,
    position: 'absolute',
    zIndex: 0,
    top: 0,
    height: height + 100,
    width: width + 100,
    resizeMode: 'stretch',
  },
  logo: {
    marginTop: 125,
    zIndex: 10,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    position: "relative",
    top: '75%',
    zIndex: 10
  },
  button: {
    alignItems: 'center', 
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
    backgroundColor: ' rgba(11,216,167,0.8)',
  },
  logInBtn: {
    backgroundColor: 'rgba(5,102,141,0.8)',
  }

});