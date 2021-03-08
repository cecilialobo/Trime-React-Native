
import React, { useState } from 'react';
import { TextInput } from 'react-native';

import DatePicker from 'react-native-datepicker';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

import SelectTrainingType from '../components/SelectTrainingType'
import SearchBarComponent from '../components/searchBar'

export default function SearchOptions() {


    const [dateFrom, setDateFrom] = useState('03-03-2021');
    const [dateTo, setDateTo] = useState('03-03-2021');
    const [value, setValue] = useState('Search');

    return (
      <View style={styles.container}>
           {/* <TextInput
            style={ styles.searchInput}
            onChangeText={text => setValue(text)}
            value={value}
            /> */}
            
            <SearchBarComponent />
       
        <View style={{width: 414, paddingHorizontal: 35, marginTop: 30, marginBottom: 15, 
                      borderBottomColor: '#eee'}}>
          <Text style={[{textAlign: "left", fontWeight: 'bold'}]}>Type of training:</Text>
        </View>
        <SelectTrainingType whiteText={false} />

        <View style={{flex: 1}}>
          <Text style={{alignSelf: 'flex-start'}}>Date:</Text>
          <View style={styles.datePicker}>

            <DatePicker
            style={styles.datePickerStyle}
            date={dateFrom} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="From date"
            format="DD-MM-YYYY"
            minDate="03-01-2021"
            maxDate="01-01-2022"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                display: 'none',
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: '5%',
                borderRadius: 7,
                backgroundColor: '#eee',
                borderColor: '#eee',
              },
            }}
            onDateChange={(date) => {
              setDateFrom(date);
            }}
          />

          <DatePicker
            style={styles.datePickerStyle}
            date={dateTo} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="From date"
            format="DD-MM-YYYY"
            minDate="03-01-2021"
            maxDate="01-01-2022"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                display: 'none',
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                borderRadius: 7,
                backgroundColor: '#eee',
                borderColor: '#eee',
                marginLeft: '5%',
              },
            }}
            onDateChange={(date) => {
              setDateTo(date);
            }}
          />

          </View>
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
    // position: "relative",
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  select: {
    height: 35, 
    width: 158, 
    borderRadius: 7,
    backgroundColor: '#eee',
    paddingHorizontal: 20,
    justifyContent: 'center'
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
