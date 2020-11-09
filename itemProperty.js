import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Properties = ({ item }) =>{
    const keys = Object.keys(item)
    const breed = item.breed

    const features = keys.map((key, i) => {
        return <Text>{key}: {item[key]}</Text>
    })

    return (
        <View>
            <Text>{breed}</Text>
            {features}
        </View>
    )
}

export default Properties;