import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function HelloText(props) {
    return (
        <Text style={styles.main}>{props.children}</Text>
    );
}
Platform.select({
    ios:{
        fontSize:40
    },
    android:{
        fontSize:70
    }
})
const styles = StyleSheet.create({
    main: {
        fontSize: 60,
        color: "black"
    }
})

export default HelloText;