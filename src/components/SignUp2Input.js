import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function SignUp2Input ( { label } ) {
    const [value, onChangeText] = useState('');

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 20,

        width: '60%'
        
    },
    label: {
        color: '#fff',
        fontSize: 14,
        height: 20,
        marginRight: 10,
    },
    input: { 
        height: 36, 
        width: 83, 
        backgroundColor: '#fff', 
        borderRadius: 8, 
        padding: 7  
    }
})