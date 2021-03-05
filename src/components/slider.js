
import React, { useState } from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import Slider from '@react-native-community/slider';


export default function LevelSlider () {

    const [value, setValue] = useState(0.5)
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Level of training:</Text>
            <Slider
                value={value}
                style={{width: 340, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor='#0BD8A7'
                maximumTrackTintColor='#0BD8A7'
                thumbTintColor='#0BD8A7'
            />

            <View style={{flexDirection: 'row', width: 380, justifyContent: 'space-around', marginBottom: 15}}>
                <Text style={{color: '#fff'}}>Beginner</Text>
                <Text style={{color: '#fff', paddingRight: 35}}>Intermediate</Text>
                <Text style={{color: '#fff'}}>Pro</Text>
            </View>
          
        </View>
    )
  }
 

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      textTitle: {
        color: '#fff',  
        alignSelf: 'flex-start',
        marginLeft: 25,
        marginTop: 50,
        marginBottom: 10,
        fontWeight: 'bold'
      }
    });
