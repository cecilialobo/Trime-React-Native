import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function WorkOutPlaces({ place }) {

    return (
        <View>
            <TouchableHighlight style={styles.placeButton}>
                <Text style={{color: '#fff'}}>{place}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    placeButton: {
        backgroundColor: '#05668D',
        height: 75,
        width: 75,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
})