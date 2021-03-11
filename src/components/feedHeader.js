import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button, TouchableOpacity } from 'react-native';

import NotificationIcons from './NotificationIcons'
import LogoFeed  from '../../assets/images/logo-feed.svg';

export default function FeedHeader( { personal, setPersonal, general, setGeneral } ) {
    
    const selectFeed = () => {
        setPersonal(!personal)
        setGeneral(!general)
    }

    return (
        <View style={styles.header}>
            <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
                <LogoFeed style={{marginBottom: 15, flex: 1}} />
                <NotificationIcons />
            </View>
            <View style={styles.selectFeedBtn}>
                <>
                    {
                        personal && 
                            <>
                                <View style={[styles.btn, styles.selected, {right: 0}]}>
                                    <Text style={[styles.btnText, styles.selected]}>Personal</Text>
                                </View>
                                <TouchableOpacity onPress={selectFeed} style={[styles.btn, {left: 0}]}>
                                    <Text style={[styles.btnText]}>General</Text>
                                </TouchableOpacity>
                            </>
                    }
                    {
                        general &&
                            <>
                                <TouchableOpacity onPress={selectFeed} style={[styles.btn, {right: 0}]}>
                                    <Text style={[styles.btnText, {backgroundColor: 'transparent'}]}>Personal</Text>
                                </TouchableOpacity>
                                <View style={[styles.btn, styles.selected, {left: 0}]}>
                                    <Text style={[styles.btnText, styles.selected]}>General</Text>
                                </View>
                            </>
                    }
                    
                </>
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
        height: 141,

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