
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { TextInput, SectionList } from 'react-native';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import SelectTrainingType from '../components/SelectTrainingType'
import SmallLogo from '../components/SmallLogo'

export default function SignUp3() {

    console.log('sign up 3')

     const [value, onChangeText] = React.useState('Who are you?');


    return (
      <View style={styles.container}>
        
        {/* <Image source={require('../images/Trime.png')} style={styles.logo} /> */}
        <SmallLogo />

        <Text style={[styles.whiteText, {fontSize: 16}]}>Time to set up your profile</Text>
        <Text style={[styles.whiteText, {fontSize: 14}]}>Profile Picture:</Text>
        <Image source={require('../images/profile-image.png')} style={styles.logo} />

        <View>
            <Text  style={[styles.whiteText, {fontSize: '16'}]}>Description: </Text>
            <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                value={value}
                />
        </View>


        <Text>What type of training do you do?</Text>
        <SelectTrainingType />

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
  whiteText: {
    color: 'white'
  },
  fontSize16: {
    fontSize: 16
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
    flex: 1,
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
