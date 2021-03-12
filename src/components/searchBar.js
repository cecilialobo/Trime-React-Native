import React, { useState, useEffect } from 'react';

import { Text, StyleSheet, View, TextInput, Image } from 'react-native';

export default function SearchBarComponent () {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((responseJson) => {
          setFilteredDataSource(responseJson);
          setMasterDataSource(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    const searchFilterFunction = (text) => {
      if (text) {
        const newData = masterDataSource.filter(function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
      } else {
        setFilteredDataSource(masterDataSource);
        setSearch(text);
      }
    };
  
    const ItemView = ({ item }) => {
      return (
        <Text style={styles.itemStyle} onPress={() => getItem(item)}>
          {item.id}
          {'.'}
          {item.title.toUpperCase()}
        </Text>
      );
    };
  
    const ItemSeparatorView = () => {
      return (
        <View
          style={{
            height: 0.5,
            width: '100%',
            backgroundColor: '#C8C8C8',
          }}
        />
      );
    };
  
    const getItem = (item) => {
      alert('Id : ' + item.id + ' Title : ' + item.title);
    };
  
    return (
        <View style={styles.container}>
            <View style={styles.searchInput}>
                <Image source={require('../../assets/images/magnifyingGlass.png')} />
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => searchFilterFunction(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Search"
                />
            </View>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: '100%',
      paddingHorizontal: 30,
      marginTop: 20
    },
    itemStyle: {
      padding: 10,
    },
    searchInput: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        borderColor: '#eee',
        backgroundColor: '#eee',
        borderRadius: 20,
        paddingLeft: 20,
    },
    textInputStyle: {
      height: 40,
      paddingLeft: 20,
      flex: 1,
    },
  });
  
  