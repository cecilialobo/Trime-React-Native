
import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import { StyleSheet, Dimensions, SafeAreaView } from 'react-native';

import Feed from './src/pages/feed'
import Home from './src/pages/lading'
import Search from './src/pages/search'
import SignUp1 from './src/pages/SignUp1'
import SignUp2 from './src/pages/SignUp2'
import SignUp3 from './src/pages/SignUp3'

const { width, height } = Dimensions.get('window');

export default function App() {

  return (
    <>
    <NativeRouter style={{width: width, height: height}}>
      <Route exact path="/" component={Home} />
      <SafeAreaView style={styles.container}>
        <Route path="/sign-up-1" component={SignUp1} />
        <Route path="/sign-up-2" component={SignUp2} />
        <Route path="/sign-up-3" component={SignUp3} />
        <Route path="/feed" component={Feed} />
        <Route path="/search" component={Search} />
      </SafeAreaView>
    </NativeRouter>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    backgroundColor: '#082D4C',
    alignItems: 'center', //horizontal
    justifyContent: 'space-between', 
    zIndex: -1
  },
});
