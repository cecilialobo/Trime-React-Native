import React from 'react';
import { Link } from "react-router-native";
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import Inbox from '../../assets/images/menu-icons/Inbox.svg'
import Notification from '../../assets/images/menu-icons/Notification.svg'

export default function NotificationIcons () {

    return (
        <View style={styles.notificationContainer}>
            <TouchableOpacity style={[styles.not]}>
              <Link to={'/'}  underlayColor="#082D4C">
                <Notification />
              </Link>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.not]}>
              <Link to={'/'}  underlayColor="#082D4C">
                <Inbox />
              </Link>
            </TouchableOpacity>
            
        </View>
    )
  }

const styles = StyleSheet.create({
    notificationContainer: {
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 20,
        position: 'absolute',
        right: 30,
        top: 0,
      },
      not: {
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5
      },
      button: {
        alignItems: 'center', 
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
