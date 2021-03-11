
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

// export default function BigButton ( { BGColor, text, linkTo } ) 
export default function BigButton ( { BGColor, UColor, text, linkTo, onPress } ){

    return (
      <View style={styles.buttonContainer}>

        <TouchableHighlight style={[styles.button, {backgroundColor: '#0BD8A7'}]} 
                            underlayColor = {UColor} >

            <Link to={linkTo} underlayColor={UColor} style={styles.link}
              onPress={onPress}>

                <Text style={styles.buttonText} underlayColor = {UColor}>
                        {text}
                </Text>

            </Link>
        </TouchableHighlight>
      </View>
    )
  }
 

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10
      },
      link: { 
        height: '100%', 
        width: '100%', 
        borderRadius: 40, 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
      },
      button: {
        alignItems: 'center', //horizontal
        justifyContent: 'center', 
        
        margin: 10,
    
        borderRadius: 40,
    
        width: 260,
        height: 73,
      },
      buttonText: {
        flex: 1,
        fontSize: 30,
        color: "white",
        padding: 17,
      }
});
