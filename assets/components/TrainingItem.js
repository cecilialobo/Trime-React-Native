import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';

export default function trainingItem ( { id, icon, type, selectedTypes, setSelectedTypes } ) {

    const [bgColor, setBgColor] = useState('#05668D');
    

    const selectTrainingType = () => {
        bgColor == '#05668D' ? setBgColor('#0BD8A7') : setBgColor('#05668D');

        if (selectedTypes.includes(type)){
            setSelectedTypes(selectedTypes.filter(el => el !== type))
        } else {
            setSelectedTypes([
                ...selectedTypes,
                type
            ])
        }
      }

    return (
        <TouchableHighlight key={id} style={styles.trainingItem} onPress={selectTrainingType}>
            <>
                <View style={[styles.trainingIcon, {backgroundColor: bgColor}]}>
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
