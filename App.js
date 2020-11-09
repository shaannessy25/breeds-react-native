import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import Items from './items'
import { cats, dogs } from './breeds'



export default function App() {

  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Breed App</Text>
      <FlatList
        style={styles.list}
        data={cats}
        renderItem={({index, item}) => {
          return <Items name={item.breed} />
        }}
      />
    </SafeAreaView>
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
