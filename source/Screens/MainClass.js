import React, { Component } from 'react'
import {styles} from '../Styles/Main'
import {Header} from '../Components/Header'
import { View, Text, ImageBackground, TouchableOpacity} from 'react-native'
//Import redux location store
import Geolocation from '@react-native-community/geolocation'
import LocationStore from '../Redux/Redux-location-store'
import {set_location} from '../Redux/Redux-actions'
//Import redux location store
// import UserStore from '../Redux/Redux-user-store'
// import BackStore from '../Redux/Redux-back-store'
// import {set_back} from '../Redux/Redux-actions'
//Handle back functions
import {handleAndroidBackButton, removeAndroidBackButtonHandler} from '../Functions/backHandler'
import {backAction} from '../Functions/Logout'

export class MainClass extends Component {
    constructor(props) {
        super(props);
        this.state = {data: null}
        Geolocation.watchPosition((info) => {
            LocationStore.dispatch(set_location({
                longitude: info.coords.longitude,
                latitude: info.coords.latitude
            }))
        }, (error) => console.log(error),
        {enableHighAccuracy: true, distanceFilter: 0, useSignificantChanges: false, maximumAge: 0})
    }

    componentDidMount(){
        //Add handle back
        handleAndroidBackButton(backAction)
    }

    componentWillUnmount() {
        removeAndroidBackButtonHandler()
    }

    render() {
        return (
        <ImageBackground
        style = {{width: '100%', height: '100%'}}
        source = {require('../Images/vakandi-background.png')}>
            <Header/>
            <View style = {styles.main}>
            <TouchableOpacity style = {styles.blueBtn} onPress = {() => {
                // BackStore.dispatch(set_back(false))
                removeAndroidBackButtonHandler()
                this.props.navigation.navigate('Locations')
            }}>
                <Text style = {styles.textBtn}>ASIGNACIONES</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.blueBtn} onPress = {() => {
                // BackStore.dispatch(set_back(false))
                removeAndroidBackButtonHandler()
                this.props.navigation.navigate('Estado')
            }}>
                <Text style = {styles.textBtn}>ESTADO DE FUERZA</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.blueBtn} onPress = {() => {
                // BackStore.dispatch(set_back(false))
                removeAndroidBackButtonHandler()
                this.props.navigation.navigate('Element')
            }}>
                <Text style = {styles.textBtn}>ELEMENTO</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.blueBtn}
            onPress = {() => {
                // BackStore.dispatch(set_back(false))
                removeAndroidBackButtonHandler()
                this.props.navigation.navigate('Parte')
            }}>
                <Text style = {styles.textBtn}>PARTE DE NOVEDADES</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.redBtn} onPress = {() => {
                // BackStore.dispatch(set_back(false))
                removeAndroidBackButtonHandler()
                this.props.navigation.navigate('Panic')
            }}>
                <Text style = {styles.textBtn}>PANICOS</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.yellowBtn} onPress = {() => {
                // BackStore.dispatch(set_back(false))
                removeAndroidBackButtonHandler()
                this.props.navigation.navigate('Alert')
            }}>
                <Text style = {styles.textBtn}>AVISOS</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.configBtn} onPress = {async() => {
                // BackStore.dispatch(set_back(false))
                removeAndroidBackButtonHandler()
                this.props.navigation.navigate('Config')
            }}>
                <Text style = {styles.textBtn}>CONFIGURACION</Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
        )
    }
}