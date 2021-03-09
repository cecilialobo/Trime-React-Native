import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';


export default function SearchSliders ({ text, beginning, middle, end }) {

    const setSliderValue = (value) => {
    let currentValue = Math.floor(value * 100);
    if (currentValue < 30){ 
      console.log(`${text}: ${beginning}`);
    } 
      
    if (currentValue >=30 && currentValue < 70) {
      console.log(`${text}: ${middle}`);
    }
      
    if (currentValue >= 70) {
      console.log(`${text}: ${end}`);
    }
  }
    
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{text}</Text>
            <Slider
                value={0.5}
                onSlidingComplete={(value) => setSliderValue(value)}
                style={{width: 340, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor='#05668D'
                maximumTrackTintColor='#05668D'
                thumbTintColor='#05668D'
            />

            <View style={{flexDirection: 'row', width: 380, justifyContent: 'space-between', marginBottom: 15, paddingHorizontal: 24}}>
                <Text>{beginning}</Text>
                <Text style={{paddingRight: 20}}>{middle}</Text>
                <Text>{end}</Text>
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
        alignSelf: 'flex-start',
        marginLeft: 25,
        marginTop: 50,
        marginBottom: 10,
        fontWeight: 'bold'
      }
    });
