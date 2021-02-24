
import React, { useState } from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import SmallLogo from './SmallLogo'
import LogoFeed  from '../../assets/images/logo-feed.svg';

export default function FeedHeader( { personal, setPersonal, general, setGeneral } ) {
    
    const selectPersonal = () => {
        setPersonal(!personal)
        setGeneral(!general)
    }
    

    const selectGeneral = () => {
        setGeneral(!general)
        setPersonal(!personal)
    }

    console.log(personal, general);

    return (
        <View style={styles.header}>
            <LogoFeed style={{marginBottom: 15}} />
            <View style={styles.selectFeedBtn}>
                <>
                    {
                        personal && 
                            <>
                                <View style={[styles.btn, styles.selected, {left: 0}]}>
                                    <Text style={[styles.btnText, styles.selected]}>Personal</Text>
                                </View>
                                <TouchableOpacity onPress={selectGeneral} style={[styles.btn, {right: 0}]}>
                                    <Text style={[styles.btnText]}>General</Text>
                                </TouchableOpacity>
                            </>
                    }
                    {
                        general &&
                            <>
                                <TouchableOpacity onPress={selectPersonal} style={[styles.btn, {left: 0}]}>
                                    <Text style={[styles.btnText, {backgroundColor: 'transparent'}]}>Personal</Text>
                                </TouchableOpacity>
                                <View style={[styles.btn, styles.selected, {right: 0}]}>
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