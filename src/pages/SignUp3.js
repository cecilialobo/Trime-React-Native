import React, { useState, useEffect } from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { TextInput, SectionList, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
// import { useFonts } from 'expo-font'

// import AppLoading from 'expo-app-loading';

import SelectTrainingType from '../components/SelectTrainingType'
import SmallLogo from '../components/SmallLogo'
import LevelSlider from '../components/slider';
import BigButton from '../components/BigButton'

export default function SignUp3() {

    console.log('sign up 3')

    // let [fontsLoaded] = useFonts({
    //   // Inter_900Black,
    //   'open-sans-400': require('../../assets/fonts/OpenSans_400Regular_Italic.ttf'),
    //   // 'co-headline': 'https://use.typekit.net/nyl3xak.css' 
    // });
  
    // console.log(fontsLoaded)
    

    const [image, setImage] = useState('https://www.kindpng.com/picc/m/722-7221920_placeholder-profile-image-placeholder-png-transparent-png.png');
    const [value, onChangeText] = React.useState('Who are you?');


    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      }
    
    // if (!fontsLoaded) {
    //   console.log('not loaded')
    //   // return <AppLoading />;
    //   return <Image source={require('../../assets/images/splash.png')} />
    // }

    return (
      <View style={styles.container}>
      
        <SmallLogo />

        <Text style={[styles.whiteText, {fontSize: 16, marginTop: 22}]}>Time to set up your profile</Text>
        
        <TouchableOpacity onPress={selectImage} style={{marginTop: 6}} >
         { image && <Image source={{uri: image}} style={{margin: 4, width: 100, height: 100, borderRadius: 100}} />}
        </TouchableOpacity>

        <View>
            <Text  style={[styles.whiteText, {fontSize: 14, fontWeight: 'bold'}]}>Description: </Text>
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={text => onChangeText(text)}
                value={value}
                />
        </View>

        <View style={{width: 414, paddingHorizontal: 35, marginBottom: 10}}>
        <Text style={[styles.whiteText, {textAlign: "left", fontWeight: 'bold'}]}>What type of training do you do?</Text>
        </View>

        <SelectTrainingType whiteText={true} />

        <LevelSlider />

        <BigButton BGColor='#0BD8A7' linkTo='/feed' text='Next' />
        
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