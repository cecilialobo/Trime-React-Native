
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { TextInput, SectionList } from 'react-native';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import SelectTrainingType from '../components/SelectTrainingType'

export default function SignUp3() {

    console.log('sign up 3')

     const [value, onChangeText] = React.useState('Who are you?');


    return (
      <View style={styles.container}>
        {/* <Image source={require('../images/Trime-main.png')} style={styles.logo} /> */}
        <Image source={require('../images/Trime.png')} style={styles.logo} />

        <Text>Time to set up your profile</Text>
        <Text>Profile Picture:</Text>
        <Image source={require('../images/profile-image.png')} style={styles.logo} />

        <View>
            <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                value={value}
                />
        </View>

        {/* <SelectTrainingType /> */}

        <View style={styles.buttonContainer}>
          
            <TouchableHighlight style={[styles.button, styles.signUpBtn]}>
              <Link to="/">
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
    justifyContent: 'flex-end', 
  },
  logo: {
    marginTop: 125
  },
  textInput: { 
      justifyContent: 'flex-start', 
      height: 109,
      width: 353, 
      borderColor: 'gray', 
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: 'white',
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
