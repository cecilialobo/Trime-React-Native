import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function SessionButton( {sessionType, isPressed} ) {

    const [ isPress, setIsPress ] = useState(false);

    const touchProps = {
        activeOpacity: 1,
        underlayColor: '#0BD8A7',                            
        style: isPress ? styles.btnPress : styles.btnNormal, 
        onPress: () => {
            isPress 
            ? setIsPress(false)  
            : setIsPress(true) & console.log(`Session type: ${sessionType}`)
        },               
      };

    return (
        <TouchableHighlight {...touchProps}>
            <Text style={{color: '#fff', fontSize: 12}}>{sessionType}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btnPress: {
        backgroundColor: '#0BD8A7',
        height: 33,
        width: 97,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    btnNormal: {
        backgroundColor: '#05668D',
        height: 33,
        width: 97,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center', 
    }
})