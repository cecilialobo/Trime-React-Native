import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function SessionButton( {sessionType} ) {

    return (
        <TouchableHighlight 
        style={styles.sessionButton} 
        underlayColor="#0BD8A7" 
        onPress={() => console.log(sessionType)}>
            <Text style={{color: '#fff'}}>{sessionType}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    sessionButton: {
        backgroundColor: '#05668D',
        height: 28,
        width: 97,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
})