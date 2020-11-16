import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'


const Items = ({title, onPress}) => {

  return (
    <TouchableHighlight 
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.breed}>{title}</Text>
    </TouchableHighlight>
  )
}

export default Items


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: "100%",
    padding: 5, 
    borderBottomWidth: 1

  },
  breed: {
    fontSize: 30,
    

  }
})