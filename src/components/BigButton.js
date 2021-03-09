
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

// export default function BigButton ( { BGColor, text, linkTo } ) 
export default function BigButton ( { BGColor, UColor, text, linkTo } ){

    return (
        // <View style={styles.buttonContainer} pointerEvents={"none"}>

          
            // <Link to={linkTo} onPress={() => console.log('go to feed')}>
              <View style={[styles.button, {backgroundColor: BGColor}]} >
                <Text style={styles.buttonText} pointerEvents={"none"}>{text}</Text>
              </View>
            // </Link>
          
        // </View>
    )
  }
 

const styles = StyleSheet.create({
    buttonContainer: {
        // flex: 1,
        // paddingBottom: 93,
        // justifyContent: 'flex-end',
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
