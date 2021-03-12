import React, {useState} from 'react';
import { Link } from "react-router-native";
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default function CircleButton () {
  const [isTraineePress, setIsTraineePress] = useState(false);
  const [isTrainerPress, setIsTrainerPress] = useState(false);

  const touchTraineeProps = {
    activeOpacity: 1,
    underlayColor: '#0BD8A7',
    style: isTraineePress ? styles.pressed : styles.normal,
    onPress: () => {
        if (isTraineePress) {
            setIsTraineePress(false)
        } else {
            setIsTraineePress(true)
            setIsTrainerPress(false)
            console.log('Trainee pressed')
        }
    }
};
  const touchTrainerProps = {
    activeOpacity: 1,
    underlayColor: '#0BD8A7',
    style: isTrainerPress ? styles.pressed : styles.normal,
    onPress: () => {
        if (isTrainerPress) {
            setIsTrainerPress(false)
        } else {
            setIsTrainerPress(true)
            setIsTraineePress(false)
            console.log('Trainer pressed')
        }
    }
  };

        return (
            <View style={styles.circleContainer}>
               <TouchableHighlight {...touchTraineeProps}>             
                    <Text style={styles.buttonLabel}>Trainee</Text>
                </TouchableHighlight>
                <TouchableHighlight {...touchTrainerProps}>
                    <Text style={styles.buttonLabel}>Trainer</Text>
                </TouchableHighlight>
            </View>
          )
        }
        
        const styles = StyleSheet.create({
          circleContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          },
          buttonLabel: {
            fontSize: 14,
            textAlign: 'center',
            color: 'white',
            color: '#fff',
            margin: 10,
          },
          pressed: {
            backgroundColor: '#0BD8A7',
            height: 100,
            width: 100, 
            borderRadius: 50, 
            alignItems: 'center', 
            justifyContent: 'center',
        },
        normal: {
          backgroundColor: '#05668D',
          height: 100,
          width: 100, 
          borderRadius: 50,
          alignItems: 'center', 
          justifyContent: 'center',
      },
        })
    