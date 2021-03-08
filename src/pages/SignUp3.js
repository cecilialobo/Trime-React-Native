import React, { useState } from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { TextInput, SectionList, TouchableOpacity } from 'react-native';
//import DocumentPicker from 'react-native-document-picker';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import SelectTrainingType from '../components/SelectTrainingType'
import SmallLogo from '../components/SmallLogo'
import BigButton from '../components/BigButton'
import Shape from '../components/Shape.js';

export default function SignUp3() {

    console.log('sign up 3')

    const [value, onChangeText] = React.useState('Who are you?');
    const [singleFile, setSingleFile] = useState(null);

     
    return (
      <View style={styles.container}>
      
        <SmallLogo />

        <Text style={[styles.whiteText, {fontSize: 16, marginTop: 22}]}>Time to set up your profile</Text>
        <Text style={[styles.whiteText, {fontSize: 14, marginTop: 14}]}>Profile Picture:</Text>
        
        <TouchableOpacity >
          <Image source={require('../../assets/images/profile-image.png')} style={{margin: 4}} />
        </TouchableOpacity>

        <View>
            <Text  style={[styles.whiteText, {fontSize: 14}]}>Description: </Text>
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={text => onChangeText(text)}
                value={value}
                />
        </View>

        <View style={{width: 414, paddingHorizontal: 35, marginBottom: 10}}>
        <Text style={[styles.whiteText, {textAlign: "left"}]}>What type of training do you do?</Text>
        </View>
        <SelectTrainingType whiteText={true} />

        <BigButton BGColor='#0BD8A7' UColor='#05668D' linkTo='/feed' text='Continue'  />
        <Shape></Shape>
      </View>
    )
  }
 
const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    backgroundColor: '#082D4C',
    alignItems: 'center', //horizontal 
  },
  whiteText: {
    color: 'white'
  },
  fontSize16: {
    fontSize: 16
  },
  textInput: { 
      height: 109,
      width: 353, 
      padding: 10,
      borderColor: 'gray', 
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: 'white',
      marginBottom: 38,
  }
});