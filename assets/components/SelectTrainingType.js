
import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { TextInput, SectionList, VirtualizedList } from 'react-native';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function SelectTrainingType() {

    console.log('select training list')

    // const getItem = (data, type) => ({
    //   id: Math.random().toString(10).substring(0),
    //   type: data[item].type,
    //   icon: data[item].icon
    // });

    // const getItemCount = (data) => 10;

    // const Item = ({ type, icon }) => (
    //   <View style={styles.item}>
    //     {/* <Image source={require('../images/training-icons/running.png')} style={styles.logo} /> */}
    //     <Text style={styles.title}>{type}</Text>
    //   </View>
    // );


    const TRAININGTYPES = [
      {
        key: 1,
        type: "Running",
        icon: require('../images/training-icons/running.png')
      },
      {
        key: 2,
        type: "Swimming",
        icon: require('../images/training-icons/running.png')
      },
      {
        key: 3,
        type: "Gym",
        icon: require('../images/training-icons/running.png')
      },
      {
        key: 4,
        type: "Boxing",
        icon: require('../images/training-icons/running.png')
      },
      {
        key: 5,
        type: "Golf",
        icon: require('../images/training-icons/running.png')
      },
      {
        key: 6,
        type: "Yoga",
        icon: require('../images/training-icons/running.png')
      },
      {
        key: 7,
        type: "Cycling",
        icon: require('../images/training-icons/running.png')
      },
      {
        key: 8,
        type: "Diet",
        icon: require('../images/training-icons/running.png')
      },
      {
        key: 9,
        type: "Crossfit",
        icon: require('../images/training-icons/running.png')
      },
      {
        key: 10,
        type: "Tennis",
        icon: require('../images/training-icons/running.png')
      }
    ];

    const selectTrainingType = (e) => {
      console.log(e.type)
    }

    return (
      <View style={styles.container}>
        { TRAININGTYPES.map(item => {
            return(
              <TouchableHighlight key={item.key} style={styles.trainingItem} onPress={selectTrainingType}>
                <>
                <View style={styles.trainingIcon}>
                  <Image source={item.icon}  />
                </View>
                <Text style={styles.whiteText}>{item.type}</Text>
                </>
              </TouchableHighlight>
            )
          })
        }
        {/* <VirtualizedList
          data={TRAININGTYPES}
          initialNumToRender={10}
          renderItem={({ item }) => <Item title={item.type} icon={item.icon} />}
          keyExtractor={item => item.key}
          getItemCount={getItemCount}
          getItem={getItem}
      /> */}
      </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 414,
    height: 180,
    backgroundColor: '#082D4C',
    paddingHorizontal: 25,
    alignItems: 'flex-start', //horizontal
    justifyContent: "space-evenly", 
  },
  whiteText: {
    color: 'white'
  },
  trainingItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 95,
    paddingBottom: 20
  },
  trainingIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 51,
    height: 51,
    borderRadius: 50,
    backgroundColor: '#05668D',
    marginBottom: 5
  }

});
