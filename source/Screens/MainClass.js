import React, { Component } from 'react'
import {styles} from '../Styles/Main'
import {Header} from '../Components/Header'
import { View, Text, ImageBackground, TouchableOpacity} from 'react-native'
//Handle back functions
import {handleAndroidBackButton, removeAndroidBackButtonHandler} from '../Functions/backHandler'
import {backAction} from '../Functions/Logout'
//Location service import
import Location from '../Functions/LocationService'

export class MainClass extends Component {  
    constructor(props) {
        super(props);
        this.state = {data: null, sendTest: null}
    }

    componentDidMount(){
        //Add handle back
        handleAndroidBackButton(backAction)
        Location.startService();
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
                this.props.navigation.navigate('Coordinacion')
            }}>
                <Text style = {styles.textBtn}>COORDINACION OPERATIVA</Text>
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