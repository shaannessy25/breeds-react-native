import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function LabelAndStars({ text, value }){
    let stars = '★'

    for(let i = 1; i < 5; i += 1){
        if( i < value ){
            stars += '★'
        }
    }


    return (
        <View style={styles.container}>
            <Text>{text}</Text>
            <Text>
                {stars}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    bar: {
        textAlign: 'right',
        flex: 1,
    },
})