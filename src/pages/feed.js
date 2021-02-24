
import React, { useState } from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import FooterMenu from '../components/footerMenu'
import FeedHeader from '../components/feedHeader'
import PersonalFeed from '../components/personalFeed'
import GeneralFeed from '../components/generalFeed'

export default function Feed() {

    console.log('feed')

    const [personal, setPersonal] = useState(true);
    const [general, setGeneral] = useState(false);

    return (
      <View style={styles.container}>
          <FeedHeader personal={personal} setPersonal={setPersonal}
                      general={general} setGeneral={setGeneral} />

          { personal && <PersonalFeed /> }
          { general && <GeneralFeed /> }

       <FooterMenu active={'Home'} />  
    
      </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    backgroundColor: 'white',
    alignItems: 'center', //horizontal 
    width: '100%'
  }
});
