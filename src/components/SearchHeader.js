import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NotificationIcons from './NotificationIcons'

export default function SearchHeader( { showButtons } ) {
    
    const selectFeed = () => {
        setPersonal(!personal)
        setGeneral(!general)
    }

    return (
        <View style={styles.header}>
            <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
                <Text  style={{marginBottom: 15, color: 'white', fontSize: 30}}>Search</Text>
                <NotificationIcons />
            </View>
        </View>
    )
  }
 

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 103,
        paddingBottom: 20,

        backgroundColor: '#082D4C',
        alignItems: 'center',
        justifyContent: "flex-end"
    },
    notificationIcons: {
        position: 'absolute',
        right: 0,

    },
    selectFeedBtn: {
        width: 244,
        height: 38,
        borderRadius: 50,
        backgroundColor: '#05668D',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    btnText: {
        color: 'white',
        fontSize: 16,
    },
    btn: {
        position:"absolute",
        height: '100%',
        paddingVertical: 9,
        paddingHorizontal: 37,
        borderRadius: 50
    },
    selected: {
        backgroundColor: '#0BD8A7',
        fontWeight: "bold"
    }
});