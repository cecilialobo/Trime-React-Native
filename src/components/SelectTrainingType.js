
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { TextInput, SectionList, VirtualizedList } from 'react-native';


import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function SelectTrainingType() {

    console.log('select training list')

    const getItem = (data, type) => ({
      id: Math.random().toString(10).substring(0),
      type: data[item].type,
      icon: data[item].icon
    });

    const getItemCount = (data) => 10;

    const Item = ({ type, icon }) => (
      <View style={styles.item}>
        {/* <Image source={require('../images/training-icons/running.png')} style={styles.logo} /> */}
        <Text style={styles.title}>{type}</Text>
      </View>
    );


    const TRAININGTYPES = [
      {
        type: "Running",
        icon: '../images/training-icons/running.png'
      },
      {
        type: "Swimming",
        icon: '../images/training-icons/running.png'
      },
      {
        type: "Gym",
        icon: '../images/training-icons/running.png'
      },
      {
        type: "Boxing",
        icon: '../images/training-icons/running.png'
      },
      {
        type: "Golf",
        icon: '../images/training-icons/running.png'
      },
      {
        type: "Yoga",
        icon: '../images/training-icons/running.png'
      },
      {
        type: "Cycling",
        icon: '../images/training-icons/running.png'
      },
      {
        type: "Crossfit",
        icon: '../images/training-icons/running.png'
      },
      {
        type: "Training",
        icon: '../images/training-icons/running.png'
      }
    ];
    
    console.log(TRAININGTYPES)

    return (
      <View style={styles.container}>

        <Text>What type of training do you do?</Text>
        <VirtualizedList
          data={TRAININGTYPES}
          initialNumToRender={10}
          renderItem={({ item }) => <Item title={item.type} icon={item.icon} />}
          keyExtractor={item => item.key}
          getItemCount={getItemCount}
          getItem={getItem}
      />
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
