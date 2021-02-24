
import React, { useState } from 'react';
import { TextInput, SectionList } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function PersonalFeed() {

    const DATA = [
        {
          title: "Because you liked Boxing:",
          data: [
              { 
                topic: "1", 
                img: <Image source={require('../../assets/images/profile-image.png')} style={{margin: 4}} />
              },
              { 
                topic: "2", 
                img: <Image source={require('../../assets/images/profile-image.png')} style={{margin: 4}} />
              },
              { 
                topic: "3", 
                img: <Image source={require('../../assets/images/profile-image.png')} style={{margin: 4}} />
              }
          ]
        },
        {
          title: "Events near you",
          data: [
            { 
              topic: "1", 
              img: <Image source={require('../../assets/images/profile-image.png')} style={{margin: 4}} />
            },
            { 
              topic: "2", 
              img: <Image source={require('../../assets/images/profile-image.png')} style={{margin: 4}} />
            },
            { 
              topic: "3", 
              img: <Image source={require('../../assets/images/profile-image.png')} style={{margin: 4}} />
            }
        ]
        },
        {
          title: "Gym workouts",
          data: [
            { 
              topic: "1", 
              img: <Image source={require('../../assets/images/profile-image.png')} style={{margin: 4}} />
            },
            { 
              topic: "2", 
              img: <Image source={require('../../assets/images/profile-image.png')} style={{margin: 4}} />
            },
            { 
              topic: "3", 
              img: <Image source={require('../../assets/images/profile-image.png')} style={{margin: 4}} />
            }
        ]
        },
        {
          title: "Popular PT:s right now",
          data: [
            { 
              topic: "1", 
              img: <Image source={require('../../assets/images/profile-image.png')} style={{margin: 4}} />
            },
            { 
              topic: "2", 
              img: <Image source={require('../../assets/images/profile-image.png')} style={{margin: 4}} />
            },
            { 
              topic: "3", 
              img: <Image source={require('../../assets/images/profile-image.png')} style={{margin: 4}} />
            }
        ]
        }
      ];


const Item = ({ title, img }) => (
    <View style={styles.item}>
        {img}
      <Text style={styles.title}>{title}</Text>
    </View>
  );

    return (
      <View style={styles.container}>
    
       <Text>Personal</Text>
        <SectionList
            // horizontal={true}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item.topic} img={item.img} />}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
        )}
        />
    
      </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    backgroundColor: 'white',
    alignItems: 'flex-start', //horizontal 
    width: '100%',
    marginTop: 141,
    paddingLeft: 30
  },

  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    
  },
  header: {
    fontSize: 16,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});
