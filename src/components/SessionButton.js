import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function SessionButton( {sessionType} ) {

    return (
            <TouchableHighlight 
            style={styles.sessionButton} 
            underlayColor="#0BD8A7" 
            onPress={() => console.log(`Session type: ${sessionType}`)}>
                <Text style={{color: '#fff', fontSize: 12}}>{sessionType}</Text>
            </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    sessionButton: {
        backgroundColor: '#05668D',
        height: 30,
        width: 97,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center', 
    }
})