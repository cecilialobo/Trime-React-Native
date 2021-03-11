import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import SelectTrainingType from '../components/SelectTrainingType';
import SearchBarComponent from '../components/searchBar';
import SearchSliders from '../components/SearchSliders';
import DateTimePickerComponent from './dateTimePickerComponent';
import SessionButtons from './SessionButtons';
import FilterButton from './FilterButton';

export default function SearchOptions() {

  const [ selectedTypes, setSelectedTypes ] = useState([]);
  const [dateFrom, setDateFrom] = useState('From:');
  const [timeFrom, setTimeFrom] = useState('From:');
  const [dateTo, setDateTo] = useState('To:');
  const [timeTo, setTimeTo] = useState('To:');


    const HeaderText = ({text}) => (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{text}</Text>
      </View>
    )

    const Line = () => (
      <View style={styles.line}>
        {/* <LinearGradient
          colors={['rgb(237,237,237)', 'transparent']}
          style={styles.line}
        /> */}
      </View>
    )

    return (
      <View style={styles.container}>
      <ScrollView 
        directionalLockEnabled={true} 
        showsHorizontalScrollIndicator={false}  
        showsVerticalScrollIndicator={false}
      >
            
        <SearchBarComponent />
       
        <HeaderText text={'Type of training'} />
        <SelectTrainingType whiteText={false} selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} />

        <Line />

        <HeaderText text={'Date'} />
        <View style={styles.datePicker}>
          <DateTimePickerComponent type={'date'} input={dateFrom} setInput={setDateFrom} />
          <DateTimePickerComponent type={'date'} input={dateTo} setInput={setDateTo} />
        </View>

        <Line />

        <HeaderText text={'Time'} />
        <View style={styles.datePicker}>
          <DateTimePickerComponent type={'time'} input={timeFrom} setInput={setTimeFrom} />
          <DateTimePickerComponent type={'time'} input={timeTo} setInput={setTimeTo} />
        </View>

        <Line />

        <SearchSliders
        text='Distance Limit' beginning='0 km' middle='10 km' end='∞'></SearchSliders>
        
        <Line />

        <SearchSliders
        text='Price Range' beginning='0 kr' middle='500 kr' end='∞'></SearchSliders>
    
        <Line />

        <SessionButtons/>

        <View style={styles.filterContainer}>
          <FilterButton text = 'Search'/>
          <FilterButton text = 'Clear filters'/>
        </View>

      </ScrollView>
      </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: 20,
    alignItems: 'center', 
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 94,
    marginBottom: 60
  },
  headerContainer: {
    width: 414, 
    paddingHorizontal: 35, 
    marginTop: 20, 
    marginBottom: 15, 
  },
  headerText: {
    textAlign: "left", 
    fontWeight: 'bold'
  },
  line: {
    marginVertical: 4,
    marginTop: 20,
    borderBottomWidth: 8,
    borderBottomColor: '#eeeeee',
    height: 6,
    backgroundColor: '#eee'
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
  status: {
    width: 100,
    alignItems: 'center',
    marginRight: 20
  },
  statusText: {
    fontWeight: 'bold',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 370,
    marginTop: 20,
    marginRight: 15,
    alignSelf: 'center',
    marginBottom: 20
  }
});
