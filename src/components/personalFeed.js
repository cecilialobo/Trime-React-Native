import React from 'react';
import { SectionList, FlatList } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';

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
            status: 'Not Paid',
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
  ];

  const THISWEEK = [
    { 
      id: '1',
      topic: "Boxing KO tips", 
      trainer: 'Anna S',
      img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.weekItemImage}/>
    },
    { 
      id: '2',
      topic: "Self Defense", 
      trainer: 'Johan K',
      img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.weekItemImage} />
    },
    { 
      id: '3',
      topic: "Kickboxing", 
      trainer: 'Henrik M',
      img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.weekItemImage} />
    },
    { 
      id: '4',
      topic: "Karate class", 
      trainer: 'Josefine R',
      img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.weekItemImage} />
    },
    { 
      id: '5',
      topic: "e", 
      trainer: 'John Doe',
      img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.weekItemImage} />
    },
    { 
      id: '6',
      topic: "f", 
      trainer: 'John Doe',
      img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.weekItemImage} />
    }
  ];
  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.weekItem}>
        {item.img}
        <Text>{item.topic}</Text>
        <Text>{item.trainer}</Text>
      </View>
  );

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
          { item.status === 'Paid' ? 
              <Text style={styles.statusText, { color: '#0BD8A7' }}>{item.status}</Text> :
              <Text style={styles.statusText, { color: '#E84747' }}>{item.status}</Text> }
      </View>
    </View>
  );

    return (
      <View style={styles.container}>
        <Text style={[styles.header, {paddingLeft: 10}]}>Sessions this week</Text>
        <FlatList
        style={ styles.section }
        data={THISWEEK}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        <SectionList
            contentContainerStyle={{width: '100%'}}
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
    flex: 1, 
    backgroundColor: 'white',
    alignItems: 'flex-start', 
    width: '100%',
    marginTop: 150,
    marginBottom: 40

  },
  section: {
    paddingVertical: 5,
    paddingBottom: 10,
    borderBottomWidth: 4,
    borderBottomColor: '#eeeeee'
  },
  weekItem: {
    width: 160,
    height: 335,
    marginVertical: 8,
    marginLeft: 20
  },
  weekItemImage: {
    width:160, 
    height: 160,
    borderRadius: 10,
    marginBottom: 4
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
    marginTop: 10,
    marginLeft: 10
  },
  status: {
    width: 100,
    alignItems: 'center',
    marginRight: 20
  },
  statusText: {
    fontWeight: 'bold',
  }
});
