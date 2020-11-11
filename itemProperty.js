import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LabelAndBar from './LabelAndBar'
import LabelAndStars from './LabelAndStars'


const Properties = ({ item }) =>{
    const keys = Object.keys(item)
    const breed = item.breed

    const features = keys.map((key, i) => {
        // return <Text>{key}: {item[key]}</Text>
        return <LabelAndStars key={i} text={`${key} ${item[key]}`} value={item[key]} />
        //return <LabelAndBar key={i} text={`${key} ${item[key]}`} value={item[key] / 5 * 100 } />
    })

    return (
        <View style={styles.contianer}>
            <Text style={styles.breed}>{breed}</Text>
            {features}
        </View>
    )
}

export default Properties;


const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        marginLeft: 5,
        justifyContent: "space-between",
        // border: "#000"
    },
    breed: {
      fontSize: 27,
      fontWeight: "bold",
    },
  });
  