import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function SignUp1Input ( { label } ) {
    const [value, onChangeText] = React.useState('');

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
            style={{ height: 35, width: 340, backgroundColor: '#fff', borderRadius: 8 }}
            onChangeText={text => onChangeText(text)}
            value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 16,
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },
    label: {
        color: '#fff',
        fontSize: 13,
        padding: 4,
    }
})