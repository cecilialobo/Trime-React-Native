
import React, { useState } from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, TextInput, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import FooterMenu from '../components/footerMenu'
import SearchHeader from '../components/SearchHeader'
import SearchOptions from '../components/searchOptions'
import SearchSliders from '../components/SearchSliders';

export default function Search() {

    console.log('search')

    const [searchOptions, setSearchOptions] = useState(true);
    const [searchResults, setSearchResults] = useState(false);
  

    return (
      <View style={styles.container}>
        <SearchHeader showButtons={searchResults} />
         
        { searchOptions && <SearchOptions /> }
        { searchResults && <SearchFeed /> }

        <SearchSliders
        text='Distance Limit' beginning='0 km' middle='10 km' end='∞'></SearchSliders>
        <SearchSliders
        text='Price Range' beginning='0 kr' middle='500 kr' end='∞'></SearchSliders>
  
        <FooterMenu active={'Search'} />  
    
      </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    backgroundColor: 'white',
    alignItems: 'center', //horizontal 
    width: '100%',
  }
});
