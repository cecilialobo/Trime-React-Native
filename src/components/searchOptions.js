
import React, { useState } from 'react';
import { TextInput, SectionList } from 'react-native';
// import DatePicker from 'react-native-date-picker';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';

import SelectTrainingType from '../components/SelectTrainingType'
import SearchBarComponent from '../components/searchBar'
import DatePickerComponent from '../components/datePickerComponent'
import DateTimePickerComponent from './dateTimePickerComponent'

export default function SearchOptions() {

  const [dateFrom, setDateFrom] = useState('From:');
  const [timeFrom, setTimeFrom] = useState('From:');
  const [dateTo, setDateTo] = useState('To:');
  const [timeTo, setTimeTo] = useState('To:');
    const [value, setValue] = useState('Search');

    const HeaderText = ({text}) => (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{text}</Text>
      </View>
    )

    return (
      <View style={styles.container}>
            
        <SearchBarComponent />
       
        <HeaderText text={'Type of training'} />
        <SelectTrainingType whiteText={false} />

        <HeaderText text={'Date'} />
        <View style={styles.datePicker}>
          <DateTimePickerComponent type={'date'} input={dateFrom} setInput={setDateFrom} />
          <DateTimePickerComponent type={'date'} input={dateTo} setInput={setDateTo} />
        </View>

        <HeaderText text={'Time'} />
        <View style={styles.datePicker}>
          <DateTimePickerComponent type={'time'} input={timeFrom} setInput={setTimeFrom} />
          <DateTimePickerComponent type={'time'} input={timeTo} setInput={setTimeTo} />
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
  headerContainer: {
    width: 414, 
    paddingHorizontal: 35, 
    marginTop: 30, 
    marginBottom: 15, 
    borderBottomColor: '#eee'
  },
  headerText: {
    textAlign: "left", 
    fontWeight: 'bold'
  },
  datePicker: {
    alignSelf: 'flex-start',
    paddingHorizontal: 35, 
    width: '90%',
    justifyContent: 'flex-start',
    flexDirection: 'row'
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
