import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

export default function LevelSlider ({ level, setLevel }) {

    const [value, setValue] = useState(0.5)

    const setTrainingLevel = (value) => {

      let currentLevel = Math.floor(value * 100);
      if (currentLevel < 30){ 
         setLevel('Beginner')

      } else if (currentLevel >=30 && currentLevel < 70) {
        setLevel('Intermediate')

      } else if (currentLevel >= 70) {
        setLevel('Pro')
      }
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Level of training:</Text>
            <Slider
                value={0.5}
                onSlidingComplete={(value) => setTrainingLevel(value)}
                style={{width: 340, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor='#0BD8A7'
                maximumTrackTintColor='#0BD8A7'
                thumbTintColor='#0BD8A7'
            />

            <View style={{flexDirection: 'row', width: 380, justifyContent: 'space-between', marginBottom: 15, paddingHorizontal: 24}}>
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
        marginTop: 10,
        marginBottom: 10,
        fontWeight: 'bold'
      }
    });
