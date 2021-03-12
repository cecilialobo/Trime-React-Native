import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import FooterMenu from '../components/footerMenu'
import SearchHeader from '../components/SearchHeader'
import SearchOptions from '../components/searchOptions'

export default function Search() {

    console.log('search')

    const [searchOptions, setSearchOptions] = useState(true);
    const [searchResults, setSearchResults] = useState(false);
  

    return (
      <View style={styles.container}>
        <SearchHeader showButtons={searchResults} />
         
        { searchOptions && <SearchOptions /> }
        { searchResults && <SearchFeed /> }
  
        <FooterMenu active={'Search'} />  
    
      </View>
    )
  }
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
  }
});
