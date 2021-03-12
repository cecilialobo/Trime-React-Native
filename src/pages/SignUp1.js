import React, { useState } from 'react';
import { ScrollView } from 'react-native'

import LogoSignUp  from '../../assets/images/logo-sign-up.svg';
import SignUp1Input from '../components/SignUp1Input.js';
import CircleButton from '../components/CircleButton.js';
import Emoticons from '../components/Emoticons.js';
import Shape from '../components/Shape.js';
import BigButton from '../components/BigButton.js'
import BdayPicker from '../components/BdayPicker.js'

import { StyleSheet, Text, View, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default function SignUp1() {

  const [ selecedType, setSelectedType ] = useState('')
  const [ day, setDay ] = useState('')
  const [ month, setMonth ] = useState('')
  const [ year, setYear ] = useState('')


    console.log('sign up 1')

    return (
      <ScrollView  contentContainerStyle={styles.container}
        directionalLockEnabled={true} 
        showsHorizontalScrollIndicator={false}  
        showsVerticalScrollIndicator={false} >
        <Emoticons></Emoticons>
        <LogoSignUp style={styles.logo}/>
        <Text style={styles.title}>What are you?</Text>
        <View style={styles.circles}>
          <CircleButton selectType={selecedType}></CircleButton>
        </View>

        <View style={styles.signupContainer}>
          <SignUp1Input label='Full Name'/>
          <SignUp1Input label='E-mail address'/>
          <SignUp1Input secureTextEntry={true} label='Password'/>
           <SignUp1Input label='Gender'/>
           <BdayPicker day={day} setDay={setDay} month={month} setMonth={setMonth} year={year} setYear={setYear} />

        </View>
        <BigButton 
              BGColor='#0BD8A7'  
              text='Next' 
              UColor='#05668D' 
              linkTo='/sign-up-2' 
          />
          
        <Shape style={{zIndex: -100}}></Shape>
      </ScrollView>

    )
  }
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#082D4C',
    alignItems: 'center', 
    width: width,
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
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 45,
    width: '70%',
  },
  signupContainer: {
    flex: 3.6,
    flexDirection: 'column',
    marginTop: 15,
  },

  button: {
    alignItems: 'center', 
    justifyContent: 'center', 
    margin: 10,
    borderRadius: 40,

    width: 260,
    height: 73,
  },
  buttonText: {
    color: "white",
  },
  signUpBtn: {
    backgroundColor: '#0BD8A7',
  },
});
