import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Items from './items'
import { cats, dogs } from './breeds'



export default function App() {

  return (

    <View style={styles.container}>
      <Text style={styles.h1}>hello</Text>
      <FlatList
        style={styles.list}
        data={dogs}
        renderItem={({index, item}) => {
          return <Items name={item.breed} />
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  h1: {
    color: 'red',
    fontSize: 50,
  },
  list: {
    flex: 1,
    width: "100%"
  }
});
