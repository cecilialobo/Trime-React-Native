
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";



import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import SmallLogo from '../components/SmallLogo'
import BigButton from '../components/BigButton'

export default function SignUp1() {

    console.log('sign up 1')

    return (
      <View style={styles.container}>
       <SmallLogo />
       <BigButton BGColor='#0BD8A7' linkTo='/sign-up-2' text='Next' />   
    
      </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    backgroundColor: '#082D4C',
    alignItems: 'center', //horizontal 
  }
});
