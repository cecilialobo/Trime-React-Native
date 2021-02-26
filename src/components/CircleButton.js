import React, { Component } from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default function CircleButton ( { buttonLabel } ) {
        return (
            <View style={styles.circleContainer}>
               <TouchableHighlight style={{height: 100, width: 100, borderRadius: 50, backgroundColor: '#05668D', alignItems: 'center', justifyContent: 'center'}}>
                <Link to="">
                    <Text style={styles.buttonLabel}>{buttonLabel}</Text>
                </Link>
                </TouchableHighlight>
            </View>
          )
        }
        
        
        const styles = StyleSheet.create({
          circleContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          buttonLabel: {
            fontSize: 14,
            textAlign: 'center',
            color: 'white',
            color: '#fff',
            margin: 10,
          }
        })
    