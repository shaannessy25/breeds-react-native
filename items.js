import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Items = ({name}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.breed}>{name}</Text>
    </View>
  )
}

export default Items


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: "100%"
  },
  breed: {
    fontSize: 30
  }
})