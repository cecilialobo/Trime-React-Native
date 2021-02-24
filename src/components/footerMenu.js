
import React, { useState } from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import Home from '../images/menu-icons/Home.svg'
import Calendar from '../images/menu-icons/Calendar.svg'
import Menu from '../images/menu-icons/Menu.svg'
import Search from '../images/menu-icons/Search.svg'

export default function FooterMenu( active ) {


    return (
        <View style={styles.footer}>
            <Link to={'/feed'} underlayColor="#f0f4f7">
                <>
                    { active && <Home fill={'#0BD8A7'} /> }
                    { !active && <Home /> }
                </>
            </Link>
            <Link
                to={'/'}
                underlayColor="#f0f4f7"
            >
            <Search fill={'white'} />
            </Link>
            <Link
                to={'/'}
                underlayColor="#f0f4f7"
            >
            <Calendar fill={'white'} />
            </Link>
            <Link
                to={'/'}
                underlayColor="#f0f4f7"
            >
            <Menu fill={'white'} />
            </Link>
        </View>
    )
  }
 

const styles = StyleSheet.create({
    footer: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingVertical: 30,
      left: 0,
      width: '100%',
      backgroundColor: '#082D4C'
    }
});
