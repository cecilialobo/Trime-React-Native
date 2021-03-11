import React, { useState } from 'react';
import { StyleSheet, Text, View,  TouchableHighlight } from 'react-native';

export default function WorkOutPlaces() {

    const [isVirtualPress, setIsVirtualPress] = useState(false);
    const [isInPersonPress, setIsInPersonPress] = useState(false);

    const touchVirtualProps = {
        activeOpacity: 1,
        underlayColor: '#0BD8A7',
        style: isVirtualPress ? styles.btnPress : styles.btnNormal,
        onPress: () => {
            if (isVirtualPress) {
                setIsVirtualPress(false)
            } else {
                setIsVirtualPress(true)
                setIsInPersonPress(false)
                console.log('Place of work out: Virtual')
            }
        },
    };

    const touchInPersonProps = {
        activeOpacity: 1,
        underlayColor: '#0BD8A7',
        style: isInPersonPress ? styles.btnPress : styles.btnNormal,
        onPress: () => {
            if (isInPersonPress) {
                setIsInPersonPress(false)
            } else {
                setIsInPersonPress(true)
                setIsVirtualPress(false)
                console.log('Place of work out: In-Person')
            }
        },
    };

    return (

        <View style={{flexDirection: 'row', width: 380, justifyContent: 'space-around', marginTop: 15, marginBottom: 40}}>
            <TouchableHighlight {...touchVirtualProps}>
                <Text style={{color: '#fff'}}>Virtual</Text>
            </TouchableHighlight>

            <TouchableHighlight {...touchInPersonProps}>
                <Text style={{color: '#fff'}}>In-Person</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    btnPress: {
        backgroundColor: '#0BD8A7',
        height: 73,
        width: 157,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    btnNormal: {
        backgroundColor: '#05668D',
        height: 73,
        width: 157,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
})