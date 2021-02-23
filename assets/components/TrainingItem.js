
import React, { useState } from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import Boxing from '../images/training-icons/Boxing.svg'

export default function trainingItem ( { key, icon, type, selectedTypes, setSelectedTypes } ) {

    const [bgColor, setBgColor] = useState('#05668D');

    const selectTrainingType = () => {
        bgColor == '#05668D' ? setBgColor('#0BD8A7') : setBgColor('#05668D');
        setSelectedTypes([
            ...selectedTypes,
            type
        ])
        console.log(selectedTypes)
      }

    return (
        <TouchableHighlight key={key} style={styles.trainingItem} onPress={selectTrainingType}>
            <>
                <View style={[styles.trainingIcon, {backgroundColor: bgColor}]}>
                    {/* <Image source={icon}  /> */}
                    {icon}
                </View>
                <Text style={styles.whiteText}>{type}</Text>
            </>
        </TouchableHighlight>
    )
  }
 

const styles = StyleSheet.create({ 
  whiteText: {
    color: 'white'
  },
  trainingItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 95,
    paddingBottom: 20
  },
  trainingIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 51,
    height: 51,
    borderRadius: 50,
    marginBottom: 5
  }
});
