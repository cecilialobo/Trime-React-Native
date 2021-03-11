import React from 'react';
import { Link } from "react-router-native";
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default function BigButton ( { UColor, text, linkTo, onPress } ){

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
      alignItems: 'center', 
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
