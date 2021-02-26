
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

// import Inbox from '../../assets/images/menu-icons/Index.svg'
// import NotificationComponent from '../../assets/images/menu-icons/Notification-component.svg'

export default function NotificationIcons ( { BGColor, text, linkTo } ) {

    return (
        <View style={styles.notificationContainer}>
            <TouchableOpacity style={[styles.not]}>
              <Link to={'/'}>
                {/* <NotificationComponent /> */}
                <Text style={{color: 'white'}}>Not</Text>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.not]}>
              <Link to={'/'}>
                {/* <Inbox /> */}
                <Text style={{color: 'white'}}>Inb</Text>
              </Link>
            </TouchableOpacity>
            
        </View>
    )
  }
 

const styles = StyleSheet.create({
    notificationContainer: {
        width: 100,
        flexDirection: "row",
        // justifyContent: 'flex-end',
        backgroundColor: 'yellow'
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
