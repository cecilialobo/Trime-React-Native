
import React, { useState } from 'react';
import { TextInput, SectionList } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function PersonalFeed() {

  const DATA = [
    {
      title: "Your upcoming events and workouts:",
      data: [
          { 
            id: 1,
            topic: "Boxing KO tips", 
            trainer: 'Anna S',
            location: 'place',
            date: 'Monday, 01/01/21',
            status: 'Paid',
            img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage}/>
          },
          { 
            id: 2,
            topic: "Self Defense", 
            trainer: 'Johan K',
            location: 'place',
            date: 'Monday, 01/01/21',
            status: 'Paid',
            img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
          },
          { 
            id: 3,
            topic: "Kickboxing", 
            trainer: 'Henrik M',
            location: 'place',
            date: 'Monday, 01/01/21',
            status: 'Paid',
            img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
          },
          { 
            id: 4,
            topic: "Karate class", 
            trainer: 'Josefine R',
            location: 'place',
            date: 'Monday, 01/01/21',
            status: 'Paid',
            img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
          },
          { 
            id: 5,
            topic: "e", 
            trainer: 'John Doe',
            location: 'place',
            date: 'Monday, 01/01/21',
            status: 'Paid',
            img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
          },
          { 
            id: 6,
            topic: "f", 
            trainer: 'John Doe',
            location: 'place',
            date: 'Monday, 01/01/21',
            status: 'Paid',
            img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
          }
      ]
    },
    {
      title: "Your previous events and workouts:",
      data: [
        { 
          id: 1,
          topic: "Mental Health", 
          trainer: 'Karin R',
          location: 'place',
          date: 'Monday, 01/01/21',
          status: 'Paid',
          img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
        },
        { 
          id: 2,
          topic: "Motivation", 
          trainer: 'Jonas G',
          location: 'place',
          date: 'Monday, 01/01/21',
          status: 'Paid',
          img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
        },
        { 
          id: 3,
          topic: "Lifestyle", 
          trainer: 'Tomas T',
          location: 'place',
          date: 'Monday, 01/01/21',
          status: 'Paid',
          img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
        },
        { 
          id: 4,
          topic: "Dare to travel", 
          trainer: 'Anders A',
          location: 'place',
          date: 'Monday, 01/01/21',
          status: 'Paid',
          img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
        }
    ]
    }
    // ,
    // {
    //   title: "Gym workouts:",
    //   data: [
    //     { 
    //       id: 1,
    //       topic: "PT for beginners", 
    //       trainer: 'Emma K',
    // location: 'place',
    // date: 'Monday, 01/01/21',
    // status: 'Paid',
    // //       img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
    // //     },
    // //     { 
    // //       id: 2,
    // //       topic: "Full body workout", 
    // //       trainer: 'Jonas G',
    // location: 'place',
    // date: 'Monday, 01/01/21',
    // status: 'Paid',
    // //       img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
    // //     },
    // //     { 
    // //       id: 3,
    // //       topic: "Gym Technique", 
    // //       trainer: 'Elsa S',
    // location: 'place',
    // date: 'Monday, 01/01/21',
    // status: 'Paid',
    // //       img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
    // //     },
    // //     { 
    // //       id: 4,
    // //       topic: "Full body workout", 
    // //       trainer: 'Jonas G',
    // location: 'place',
    // date: 'Monday, 01/01/21',
    // status: 'Paid',
    // //       img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
    // //     },
    // //     { 
    // //       id: 5,
    // //       topic: "Gym Technique", 
    // //       trainer: 'Elsa S',
    // location: 'place',
    // date: 'Monday, 01/01/21',
    // status: 'Paid',
    // //       img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
    // //     }
    // // ]
    // // },
    // // {
    // //   title: "Popular PT:s right now:",
    // //   data: [
    // //     { 
    // //       id: 1,
    // //       topic: "1", 
    // //       trainer: 'John Doe',
    // location: 'place',
    // date: 'Monday, 01/01/21',
    // status: 'Paid',
    // //       img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
    // //     },
    // //     { 
    // //       id: 2,
    // //       topic: "2", 
    // //       trainer: 'John Doe',
    // location: 'place',
    // date: 'Monday, 01/01/21',
    // status: 'Paid',
    // //       img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
    // //     },
    // //     { 
    // //       id: 3,
    // //       topic: "3", 
    // //       trainer: 'John Doe',
    // location: 'place',
    // date: 'Monday, 01/01/21',
    // status: 'Paid',
    // //       img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
    // //     },
    // //     { 
    // //       id: 4,
    // //       topic: "1", 
    // //       trainer: 'John Doe',
    // location: 'place',
    // date: 'Monday, 01/01/21',
    // status: 'Paid',
    // //       img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
    // //     },
    // //     { 
    // //       id: 5,
    // //       topic: "2", 
    // //       trainer: 'John Doe',
    // location: 'place',
    // date: 'Monday, 01/01/21',
    // status: 'Paid',
    // //       img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
    // //     },
    // //     { 
    // //       id: 6,
    // //       topic: "3", 
    // //       trainer: 'John Doe',
    // location: 'place',
    // date: 'Monday, 01/01/21',
    // status: 'Paid',
    //       img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
    //     }
    // ]
    // }
  ];


const Item = ({ item }) => (
    <View style={styles.item}>
        {item.img}
        <View style={styles.infoSection}>
          <Text style={[styles.title, {fontWeight: 'bold'}]}>{item.topic}, {item.trainer}</Text>
          <Text style={styles.title}>{item.date}</Text>
          <Text style={styles.title}>{item.location}</Text>
      </View>
      <View style={styles.status}>
          <Text>Status</Text>
          <Text>{item.status}</Text>
      </View>
    </View>
  );

    return (
      <View style={styles.container}>
        <SectionList
            contentContainerStyle={{width: '100%'}}
            // horizontal={true}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item item={item} />}
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
    marginTop: 150,
    marginBottom: 88

  },

  item: {
    // backgroundColor: "#f9c2ff",
    // padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    width: 414,
    height: 100,

    borderBottomWidth: 4,
    borderBottomColor: '#eeeeee'
  },
  itemImage: {
    width:72, 
    height: 72,
    marginHorizontal: 10,
    borderRadius: 10,

  },
  infoSection: {
    flex: 1
  },
  header: {
    fontSize: 16,
    backgroundColor: "#fff",
    width: '100%'
  },
  title: {
    // fontSize: 24
  },
  status: {
    // height: 72,
    width: 100,
    alignItems: 'center',
    marginRight: 20
  }
});
