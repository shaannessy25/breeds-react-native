import React from 'react';
import { View, Text, StyleSheet } from 'react-native'



export default function LabelAndBar({ text, value }){
    return (
        <View style={styles.container}>
            <Text>{text}</Text>
            <View style={styles.bar}>
                <View style={[styles.barInner, {width: `${value}%`}]}></View>
            </View>
            
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    bar: {
        height: 20,
        width: 100,
        margin: 3,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.5)',
        textAlign: 'right',

    },

    barInner: {
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
})