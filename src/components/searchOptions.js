
import React, { useState } from 'react';
import { TextInput, SectionList, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import SelectTrainingType from '../components/SelectTrainingType'

export default function SearchOptions() {


  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

    // const [date, setDate] = useState(new Date())
    const [value, setValue] = useState('Search');


    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    return (
      <View style={styles.container}>
           <TextInput
            style={ styles.searchInput}
            onChangeText={text => setValue(text)}
            value={value}
            />
       
       <View style={{width: 414, paddingHorizontal: 35, marginTop: 30, marginBottom: 15, 
                      borderBottomColor: '#eee'}}>
        <Text style={[{textAlign: "left", fontWeight: 'bold'}]}>Type of training:</Text>
        </View>
        <SelectTrainingType whiteText={false} />

      
      <View style={styles.datePicker}>
        <Text>Date:</Text>
          <TouchableOpacity onPress={showDatepicker} >
            <Text>Show Date Picker</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showTimepicker} >
          <Text>Show Time Picker</Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
      </View>
   
    
      </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    backgroundColor: 'white',
    paddingTop: 20,
    alignItems: 'center', //horizontal 
    justifyContent: 'flex-start',
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
  datePicker: {
    flex: 1,
    width: '100%',
    position: "relative",
    justifyContent: 'flex-start'
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
