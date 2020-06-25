import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native'
//Import redux location store
import LocationStore from '../Redux/Redux-location-store'
import {set_location} from '../Redux/Redux-actions'

export class DisplayAlert extends Component {
    evaluateColor(item) {
        if(item.type == 'Alert') {
            return(
            <View style = {styles.alertDisplay}>
                <View style = {styles.topContainer}>
                    <Text style = {styles.user}>User: {item.user}</Text>
                    <Text style = {styles.user}>Hour: {item.hour}</Text>
                </View>

                <View style = {styles.botContainer}>
                    <TextInput 
                    style = {styles.input}
                    value = {item.message}
                    multiline = {true}
                    editable = {true}/>

                    <TouchableOpacity style = {styles.mapsBtn} onPress = {() => {
                        LocationStore.dispatch(set_location({
                            longitude: item.longitude,
                            latitude: item.latitude
                        }))
                        this.props.navigation.navigate('ShowLocation')
                    }}>
                    <Image 
                    source = {require('../Images/set-location.png')}
                    style = {{height: 50, width: 50}}/>
                    </TouchableOpacity>
                </View>
            </View>
            )
        } else if (item.type == 'Panic') {
            return(
            <View style = {styles.panicDisplay}>
                <View style = {styles.topContainer}>
                    <Text style = {styles.user}>User: {item.user}</Text>
                    <Text style = {styles.user}>Hour: {item.hour}</Text>
                </View>

                <View style = {styles.botContainer}>
                    <TextInput 
                    style = {styles.input}
                    value = {item.message}
                    multiline = {true}
                    editable = {true}/>

                    <TouchableOpacity style = {styles.mapsBtn} onPress = {() => {
                        LocationStore.dispatch(set_location({
                            longitude: item.longitude,
                            latitude: item.latitude
                        }))
                        this.props.navigation.navigate('ShowLocation')
                    }}>
                    <Image 
                    source = {require('../Images/set-location.png')}
                    style = {{height: 50, width: 50}}/>
                    </TouchableOpacity>
                </View>
            </View>
            )
        } else if (item.type == 'Parte') {
            return(
            <View style = {styles.parteDisplay}>
                <View style = {styles.topContainer}>
                    <Text style = {styles.user}>User: {item.user}</Text>
                    <Text style = {styles.user}>Hour: {item.hour}</Text>
                </View>

                <View style = {styles.botContainer}>
                    <TextInput 
                    style = {styles.input}
                    value = {item.message}
                    multiline = {true}
                    editable = {true}/>

                    <TouchableOpacity style = {styles.mapsBtn} onPress = {() => {
                        LocationStore.dispatch(set_location({
                            longitude: item.longitude,
                            latitude: item.latitude
                        }))
                        this.props.navigation.navigate('ShowLocation')
                    }}>
                    <Image 
                    source = {require('../Images/set-location.png')}
                    style = {{height: 50, width: 50}}/>
                    </TouchableOpacity>
                </View>
            </View>
            )
        }
    }

    render() {
        return (
            <FlatList
            data = {this.props.data}
            keyExtractor = {(item) => item.id}
            renderItem = {({item}) => (
                this.evaluateColor(item)
            )}
            />
        )
    }
}

const styles = StyleSheet.create({
    alertDisplay: {
        backgroundColor: 'rgba(255, 192, 0, 1)',
        margin: 10,
        borderRadius: 10,
        height: 120
    },
    panicDisplay: {
        backgroundColor: 'rgba(246, 36, 57, 1)',
        margin: 10,
        borderRadius: 10,
        height: 120
    },
    parteDisplay: {
        backgroundColor: 'steelblue',
        // backgroundColor: 'rgba(29, 171, 49, 1)',
        margin: 10,
        borderRadius: 10,
        height: 120
    },
    topContainer: {
        flex: 1/4,
        margin: 10,
        // borderColor: 'green',
        // borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    botContainer: {
        flex: 3/4,
        margin: 10,
        marginTop: 0,
        // borderColor: 'green',
        // borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    user: {
        fontSize: 20,
        color: 'white',
        // margin: 10
    },
    input: {
        flex: 3/4,
        height: '100%',
        backgroundColor: 'white',
        fontSize: 20,
        color: 'black',
        borderRadius: 10
    },
    mapsBtn: {
        flex: 1/4,
        backgroundColor: '#3248a8',
        width: '100%',
        height: '100%',
        borderRadius: 10,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})