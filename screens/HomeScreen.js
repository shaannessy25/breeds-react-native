import React from 'react'
import { View, Text, FlatList, StyleSheet, Button } from 'react-native'
import { cats } from '../breeds'
import Items from '../items'


export default function HomeScreen( { navigation } ) {

    return (
        <View style={styles.container}>
           <FlatList
            style={styles.flat}
            data={cats}
            renderItem={({index, item}) => {
                return (
                   <Items 
                        title={item.breed}
                        onPress={() => {
                            navigation.navigate("Details", item )
                        }}
                   />
                )
            }}
           >

           </FlatList>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
    
      backgroundColor: 'rgb(33, 202, 222)',

    },

    flat: {
        borderWidth: 3,
    }

  });