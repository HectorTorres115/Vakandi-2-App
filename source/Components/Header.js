import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export const Header = () => {
    return (
        <View style = {styles.header}>
            <Text style = {styles.headerTitle}>Vakandi security app</Text>
            <Image style = {{width: 60, height: 60, margin: 10}} source = {require('../Images/logo.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        borderBottomColor: 'white',
        borderWidth: 2
    },
    headerTitle: {
        fontSize: 20,
        color: 'white',
        margin: 20
    }
})