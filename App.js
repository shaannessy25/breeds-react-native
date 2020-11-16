import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, KeyboardAvoidingView } from 'react-native';
import Items from './items'
import { cats, dogs } from './breeds'
import Properties from './itemProperty'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

const Stack = createStackNavigator();

export default function App() {
  const [ query, setQuery ] = useState('')
  return (

    // <SafeAreaView style={styles.container}>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      /* <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >

        <Text style={styles.h1}>Breed App</Text>
        <FlatList
          style={styles.list}
          data={cats.filter((item) => item.breed.toLowerCase().includes(query.toLowerCase()))}
          renderItem={({index, item}) => {
            return <Properties item={item} />
          }}
        />

        <TextInput 
          style={styles.input}
          onChangeText={text => setQuery(text)}
          value={query}
        />
        <StatusBar style="auto" />
      </KeyboardAvoidingView> */
    //</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    width: '100%',
  },
  h1: {
    color: 'red',
    fontSize: 50,
  },
  list: {
    flex: 1,
    width: "100%"
  },
  input: {
    width: '100%', 
    borderWidth: 1,
    padding: 10
  },
});
