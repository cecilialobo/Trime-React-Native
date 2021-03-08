
import React, { useState } from 'react';
import { TextInput, SectionList } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import SelectTrainingType from '../components/SelectTrainingType'

export default function SearchOptions() {


    const [date, setDate] = useState(new Date())
    const [value, setValue] = useState('Search');


    return (
      <View style={styles.container}>
           <TextInput
            style={ styles.searchInput}
            onChangeText={text => setValue(text)}
            value={value}
            />
       
       <View style={{width: 414, paddingHorizontal: 35, marginTop: 30, marginBottom: 15}}>
        <Text style={[{textAlign: "left", fontWeight: 'bold'}]}>Type of training:</Text>
        </View>
        <SelectTrainingType whiteText={false} />
      
        {/* <DatePicker
            date={date}
            onDateChange={setDate}
        /> */}
    
      </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    backgroundColor: 'white',
    paddingTop: 20,
    alignItems: 'center', //horizontal 
    width: '100%',
    marginTop: 104,
    marginBottom: 40

  },
  searchInput: {
    height: 35, 
    width: 360, 
    borderRadius: 50,
    backgroundColor: '#eee',
    paddingHorizontal: 20
  },

  item: {
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
    width: '100%',
    fontWeight: 'bold',
    marginTop: 10
  },
  title: {
    // fontSize: 24
  },
  status: {
    // height: 72,
    width: 100,
    alignItems: 'center',
    marginRight: 20
  },
  statusText: {
    fontWeight: 'bold',
    // fontSize: 20, 
    // backgroundColor: 'green'
  }
});
