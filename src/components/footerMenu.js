
import React, { useState } from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, ImageBackground, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import Home from '../../assets/images/menu-icons/Home.svg'
import Calendar from '../../assets/images/menu-icons/Calendar.svg'
import Menu from '../../assets/images/menu-icons/Menu.svg'
import Search from '../../assets/images/menu-icons/Search.svg'
import FooterBackground from '../../assets/images/footerBackground.svg'

export default function FooterMenu( active ) {

    return (
        <>
        <View style={styles.footer}>
            <Link to={'/feed'} underlayColor="#f0f4f7">
                    { active.active === 'Home' ? <Home fill={'#0BD8A7'} /> : <Home fill={'white'} /> }
            </Link>

            <Link to={'/'} underlayColor="#f0f4f7">
                { active.active === 'Search' ? <Search fill={'#0BD8A7'} /> : <Search fill={'white'} /> }
            </Link>

            <Link to={'/'} underlayColor="#f0f4f7">
                { active.active === 'Calendar' ? <Calendar  fill={'#0BD8A7'} /> : <Calendar fill={'white'} /> }
            </Link>

            <Link to={'/'} underlayColor="#f0f4f7">
                { active.active === 'Menu' ? <Menu fill={'#0BD8A7'} /> : <Menu fill={'white'} /> } 
            </Link>
            <FooterBackground style={styles.footerBackground}/>    
        </View>
        
        </>
    )
  }
 

const styles = StyleSheet.create({
    footer: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingTop: 40,
      paddingHorizontal: 10,
      left: 0,
      width: '100%',
      backgroundColor: 'transparent'
    },
    footerBackground: {
        width: 450,
        resizeMode: "cover",
        position: 'absolute',
        right: 0,
        // top: 0,
        zIndex: -1,
        flex: 1,
    }
});
