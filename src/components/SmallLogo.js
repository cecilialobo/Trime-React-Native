import React from 'react';
import { StyleSheet } from 'react-native';

import LogoSignUp from '../../assets/images/logo-sign-up.svg'

export default function SmallLogo() {

    return (
        <LogoSignUp style={styles.logo} />
    )
  }
 
const styles = StyleSheet.create({
    logo: {
      marginTop: 72
    }
});
