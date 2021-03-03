
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import LogoSignUp  from '../../assets/images/logo-sign-up.svg';
import SignUp1Input from '../components/SignUp1Input.js';
import CircleButton from '../components/CircleButton.js';


import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, Dimensions, TextInput } from 'react-native';
const { width, height} = Dimensions.get('window');

export default function SignUp1() {

  const [value, onChangeText] = React.useState('');

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
          <View style={styles.birthDateContainer}>
          <Text style={styles.birthDateLabel}>Birth date</Text>
          <View style={styles.dateInput}>
            <TextInput style={[styles.input, styles.day]}  onChangeText={day => onChangeText(day)}
            value={value} />
            <TextInput style={[styles.input, styles.month]}
             onChangeText={month => onChangeText(month)}
             value={value} />
            <TextInput style={[styles.input, styles.year]}  onChangeText={year => onChangeText(year)}
            value={value} />
            </View>
          </View>
          
        </View>
        <View style={styles.buttonContainer}>
          
            <TouchableHighlight style={[styles.button, styles.signUpBtn]}>
                <Link to="/sign-up-2">
                    <Text style={[{fontSize: 30}, styles.buttonText]}>Next</Text>
                </Link>
            </TouchableHighlight>
            {/* <TouchableHighlight style={[styles.button, styles.logInBtn]}>
                <Link to="">
                    <Text style={styles.buttonText}>Log in</Text>
                </Link>
            </TouchableHighlight> */}
          
        </View>
      </SafeAreaView>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    backgroundColor: '#082D4C',
    alignItems: 'center', //horizontal 
    width: width,
    height: height,
  },
  logo: {
    marginTop: 76,
  },
  title: {
    marginTop: 15,
    color: '#fff',
    fontSize: 16,
  },
  circles: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 45,
  },
  signupContainer: {
    flex: 2.2,
    flexDirection: 'column',
    marginTop: 15,
  },
   birthDateContainer: {
    flexDirection: 'column',
    marginTop: 16,
    padding: 20,
   },
   birthDateLabel: {
    color: 'white',
    padding: 4,
    fontSize: 13,
   },
   dateInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
   input: {
    backgroundColor: '#fff', 
    borderRadius: 9,
    height: 35,
   },
   day: {
     width: 90,
   },
   month: {
    width: 90,
  },
  year: {
    width: 120,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center', //horizontal
    justifyContent: 'center', 

    paddingVertical: 15,
    paddingHorizontal: 40,
    margin: 10,
    borderRadius: 40,
    color: "white",
  },
  buttonText: {
    color: "white",
  },
  signUpBtn: {
    backgroundColor: '#0BD8A7',
    width: 260,
    height: 73,
  },
});
