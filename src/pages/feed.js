import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import FooterMenu from '../components/footerMenu'
import FeedHeader from '../components/feedHeader'
import PersonalFeed from '../components/personalFeed'
import GeneralFeed from '../components/generalFeed'

export default function Feed() {

    console.log('feed')

    const [personal, setPersonal] = useState(false);
    const [general, setGeneral] = useState(true);

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
    flex: 1, 
    backgroundColor: 'white',
    alignItems: 'center',  
    width: '100%'
  }
});
