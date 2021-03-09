import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function WorkOutPlaces({ place }) {

    return (
        <TouchableHighlight 
        style={styles.placeButton} 
        activeOpacity={0.4}
        underlayColor="#0574a1" 
        onPress={() => console.log(place)}>
            <Text style={{color: '#fff'}}>{place}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    placeButton: {
        backgroundColor: '#05668D',
        height: 73,
        width: 157,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
})