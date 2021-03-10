import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function SessionButton() {

    const [ isSoloPress, setIsSoloPress ] = useState(false);
    const [ isBothPress, setIsBothPress ] = useState(false);
    const [ isGroupPress, setIsGroupPress ] = useState(false);

    const touchSoloProps = {
        activeOpacity: 1,
        underlayColor: '#0BD8A7',                            
        style: isSoloPress ? styles.btnPress : styles.btnNormal, 
        onPress: () => {
            isSoloPress 
            ? setIsSoloPress(false)  
            : setIsSoloPress(true) & setIsBothPress(false) & setIsGroupPress(false) & console.log('Session type: Solo Session') 
        },               
      };

      const touchBothProps = {
        activeOpacity: 1,
        underlayColor: '#0BD8A7',                            
        style: isBothPress ? styles.btnPress : styles.btnNormal, 
        onPress: () => {
            isBothPress 
            ? setIsBothPress(false)  
            : setIsBothPress(true) & setIsSoloPress(false) & setIsGroupPress(false) & console.log('Session type: Both')
        },               
      };

      const touchGroupProps = {
        activeOpacity: 1,
        underlayColor: '#0BD8A7',                            
        style: isGroupPress ? styles.btnPress : styles.btnNormal, 
        onPress: () => {
            isGroupPress 
            ? setIsGroupPress(false)  
            : setIsGroupPress(true) & setIsSoloPress(false) & setIsBothPress(false) & console.log('Session type: Group Session')
        },               
      };

    return (
        <View style={styles.sessionContainer}>
            <TouchableHighlight {...touchSoloProps}>
                <Text style={styles.text}>Solo Session</Text>
            </TouchableHighlight>

            <TouchableHighlight {...touchBothProps}>
                <Text style={styles.text}>Both</Text>
            </TouchableHighlight>

            <TouchableHighlight {...touchGroupProps}>
                <Text style={styles.text}>Group Session</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    sessionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 370,
        marginTop: 20,
        marginRight: 15,
        alignSelf: 'center'  
      },
    text: {
        color: '#fff', 
        fontSize: 12,
    },
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