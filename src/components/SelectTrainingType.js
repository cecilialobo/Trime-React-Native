import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import TrainingItem from './TrainingItem'
import Boxing from '../../assets/images/training-icons/Boxing.svg'
import Running from '../../assets/images/training-icons/Running.svg'
import Crossfit from '../../assets/images/training-icons/Crossfit.svg'
import Cycling from '../../assets/images/training-icons/Cycling.svg'
import Diet from '../../assets/images/training-icons/Diet.svg'
import Gym from '../../assets/images/training-icons/Gym.svg'
import Swimming from '../../assets/images/training-icons/Swimming.svg'
import Yoga from '../../assets/images/training-icons/Yoga.svg'
import Golf from '../../assets/images/training-icons/Golf.svg'
import Tennis from '../../assets/images/training-icons/Tennis.svg'

export default function SelectTrainingType( { whiteText, selectedTypes, setSelectedTypes } ) {

    const TRAININGTYPES = [
      {
        key: '1',
        type: "Running",
        icon: <Running />
      },
      {
        key: 2,
        type: "Swimming",
        icon: <Swimming />
      },
      {
        key: 3,
        type: "Gym",
        icon: <Gym />
      },
      {
        key: 4,
        type: "Boxing",
        icon: <Boxing />
      },
      {
        key: 5,
        type: "Golf",
        icon: <Golf />
      },
      {
        key: 6,
        type: "Yoga",
        icon: <Yoga />
      },
      {
        key: 7,
        type: "Cycling",
        icon: <Cycling />
      },
      {
        key: 8,
        type: "Diet",
        icon: <Diet />
      },
      {
        key: 9,
        type: "Crossfit",
        icon: <Crossfit />
      },
      {
        key: 10,
        type: "Tennis",
        icon: <Tennis />
      }
    ];

    return (
      <View style={styles.container}>
    
        { TRAININGTYPES.map(item => {
            return(
              <TrainingItem key={item.key} icon={item.icon} type={item.type} whiteText={whiteText}
                            selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} />
            )
          })
        }
      </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    // flex: 1, // takes up the entire screen
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 414,
    height: 180,
    // backgroundColor: '#082D4C',
    paddingHorizontal: 25,
    alignItems: 'flex-start', //horizontal
    justifyContent: "space-evenly", 
  },
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
    backgroundColor: '#05668D',
    marginBottom: 5
  }

});