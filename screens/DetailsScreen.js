import React from 'react'
import { View, Text } from 'react-native'

export default function DetailsScreen({ route, navigation }) {
    const item = route.params
    const keys = Object.keys(item)
    const features = keys.map((key) => {
        return (
         <Text>{key}</Text>
        )
    })
    return (
        <View>
            <Text>Details Screen</Text>
            {features}
        </View>
    )
}
