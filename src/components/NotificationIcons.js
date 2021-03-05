
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import Home from '../../assets/images/menu-icons/Home.svg'
import Inbox from '../../assets/images/menu-icons/Inbox.svg'
import Notification from '../../assets/images/menu-icons/Notification.svg'

export default function NotificationIcons ( { BGColor, text, linkTo } ) {

    return (
        <View style={styles.notificationContainer}>
            <TouchableOpacity style={[styles.not]}>
              <Link to={'/'}>
                <Notification />
              </Link>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.not]}>
              <Link to={'/'}>
                <Inbox />
              </Link>
            </TouchableOpacity>
            
        </View>
    )
  }
 

const styles = StyleSheet.create({
    notificationContainer: {
        // width: 100,
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 20,
        position: 'absolute',
        right: 30,
        top: 0,
        // backgroundColor: 'yellow'
      },
      not: {
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5
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
