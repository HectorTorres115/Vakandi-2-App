import React, {useEffect} from 'react'
import {styles} from '../Styles/Main'
import {Header} from '../Components/Header'
import { View, Text, ImageBackground, TouchableOpacity, Alert } from 'react-native'
//Import redux location store
import Geolocation from '@react-native-community/geolocation'
import LocationStore from '../Redux/Redux-location-store'
import {set_location} from '../Redux/Redux-actions'
//Import redux location store
import UserStore from '../Redux/Redux-user-store'
//Handle back functions
import BackStore from '../Redux/Redux-back-store'
import {set_back} from '../Redux/Redux-actions'
import { useBackHandler } from '@react-native-community/hooks'
import { backAction } from '../Functions/Logout'
//Set token stuff
import {SetToken} from '../Requests/Users'
import {useMutation} from 'react-apollo'

Geolocation.watchPosition((info) => {
    LocationStore.dispatch(set_location({
        longitude: info.coords.longitude,
        latitude: info.coords.latitude
    }))
}, (error) => console.log(error),
{enableHighAccuracy: true, distanceFilter: 0, useSignificantChanges: false, maximumAge: 0})

export const Main = ({navigation}) => {
    useEffect(() => {
        BackStore.dispatch(set_back(true))
    }, [])

    const [settoken] = useMutation(SetToken, {
        onCompleted: (data) => {
            console.log(data.SetToken)
            Alert.alert('Notificaciones sincronizadas')
        },
        onError: (error) => {
            console.log(error)
        }
    })

    useBackHandler(() => {
        if(BackStore.getState() == true) {
            backAction()
            return true
        } else {
            return false
        }
    })

    return (
        <ImageBackground
        style = {{width: '100%', height: '100%'}}
        source = {require('../Images/vakandi-background.png')}>
        <Header/>
        <View style = {styles.main}>

            {/* <TouchableOpacity style = {styles.blueBtn} onPress = {() => {
                BackStore.dispatch(set_back(false))
                navigation.navigate('Coordinacion')
            }}>
                <Text style = {styles.textBtn}>COORDINACIÓN OPERATIVA</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style = {styles.blueBtn} onPress = {() => {
                BackStore.dispatch(set_back(false))
                navigation.navigate('Locations')
            }}>
                <Text style = {styles.textBtn}>ASIGNACIONES</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.blueBtn} onPress = {() => {
                BackStore.dispatch(set_back(false))
                navigation.navigate('Estado')
            }}>
                <Text style = {styles.textBtn}>ESTADO DE FUERZA</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.blueBtn} onPress = {() => {
                BackStore.dispatch(set_back(false))
                navigation.navigate('Element')
            }}>
                <Text style = {styles.textBtn}>ELEMENTO</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.blueBtn}
            onPress = {() => {
                BackStore.dispatch(set_back(false))
                navigation.navigate('Parte')
            }}>
                <Text style = {styles.textBtn}>PARTE DE NOVEDADES</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.redBtn} onPress = {() => {
                BackStore.dispatch(set_back(false))
                navigation.navigate('Panic')
            }}>
                <Text style = {styles.textBtn}>PANICOS</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.yellowBtn} onPress = {() => {
                BackStore.dispatch(set_back(false))
                navigation.navigate('Alert')
            }}>
                <Text style = {styles.textBtn}>AVISOS</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.configBtn} onPress = {async() => {
                BackStore.dispatch(set_back(false))
                navigation.navigate('Config')
            }}>
                <Text style = {styles.textBtn}>CONFIGURACION</Text>
            </TouchableOpacity>

        </View>
        </ImageBackground>
    )
}