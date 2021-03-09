import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function trainingItem ( { key, icon, type, selectedTypes, setSelectedTypes, whiteText } ) {

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
        <TouchableOpacity key={key} style={styles.trainingItem} onPress={selectTrainingType}>
            <>
                <View style={[styles.trainingIcon, {backgroundColor: bgColor}]}>
                    {icon}
                </View>
                { whiteText && <Text style={styles.whiteText}>{type}</Text> }
                { !whiteText && <Text>{type}</Text> }
            </>
        </TouchableOpacity>
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
