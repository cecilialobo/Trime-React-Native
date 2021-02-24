
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import LogoSignUp  from '../images/logo-sign-up.svg';

export default function SmallLogo() {

    return (
        // <Image source={require('../images/Trime.png')} style={styles.logo} />
        <LogoSignUp style={styles.logo} />
    )
  }
 

const styles = StyleSheet.create({
    logo: {
      marginTop: 72
    }
});
