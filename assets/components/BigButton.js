
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function BigButton ( { BGColor, text, linkTo } ) {

    return (
        <View style={styles.buttonContainer}>
          
            <TouchableHighlight style={[styles.button, {backgroundColor: BGColor}]}>
              <Link to={linkTo}>
                <Text style={styles.buttonText}>{text}</Text>
              </Link>
            </TouchableHighlight>
          
        </View>
    )
  }
 

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        paddingBottom: 93,
        justifyContent: 'flex-end',
      },
      button: {
        alignItems: 'center', //horizontal
        justifyContent: 'center', 
    
        paddingVertical: 15,
        paddingHorizontal: 40,
        margin: 10,
    
        borderRadius: 40,
    
        width: 260,
        height: 73,
      },
      buttonText: {
        flex: 1,
        fontSize: 30,
        color: "white",
      }
});
