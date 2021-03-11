// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image
} from 'react-native';

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
      // Check if searched text is not blank
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource and update FilteredDataSource
        const newData = masterDataSource.filter(function (item) {
          // Applying filter for the inserted text in search bar
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
      } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setFilteredDataSource(masterDataSource);
        setSearch(text);
      }
    };
  
    const ItemView = ({ item }) => {
      return (
        // Flat List Item
        <Text style={styles.itemStyle} onPress={() => getItem(item)}>
          {item.id}
          {'.'}
          {item.title.toUpperCase()}
        </Text>
      );
    };
  
    const ItemSeparatorView = () => {
      return (
        // Flat List Item Separator
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
      // Function for click on an item
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
          {/* <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          /> */}
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
  
  