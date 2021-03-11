import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function FilterButton({text}) {

    return (
        <TouchableHighlight 
            style={styles.filterButton} 
            underlayColor="#0BD8A7"
            onPress={() => console.log('Button Pressed')}>
                <Text style={{color: '#fff', fontSize: 16}}>{text}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    filterButton: {
        backgroundColor: '#05668D',
        height: 45,
        width: 143,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center', 
    }
})