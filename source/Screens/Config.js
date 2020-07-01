import React, {useEffect} from 'react'
import { styles } from '../Styles/Config'
import {Header} from '../Components/Header'
import { View, Text, ImageBackground, TouchableOpacity, Alert } from 'react-native'
//Set token stuff
import UserStore from '../Redux/Redux-user-store'
import {GetDeviceToken} from "../Functions/GetDeviceToken";
import {SetToken} from '../Requests/Users'
import {useMutation} from 'react-apollo'
//Import user from async storage
import {GetUser} from '../Functions/UserStorage'
//Handle back functions
// import BackStore from '../Redux/Redux-back-store'
// import {set_back} from '../Redux/Redux-actions'
import {handleAndroidBackButton} from '../Functions/backHandler'
import {backAction} from '../Functions/Logout'

export const Config = ({navigation}) => {
    //Lifecycle methods
    useEffect(() => {
        handleAndroidBackButton(() => navigation.navigate('MainClass'))
        return(() => {
            handleAndroidBackButton(backAction)
            // BackStore.dispatch(set_back(true))
        })
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
    return(
        <>
        <Header/>
        <ImageBackground
        style = {{width: '100%', height: '100%'}}
        source = {require('../Images/vakandi-background.png')}>
        <View style = {styles.main}>
            <TouchableOpacity style = {styles.setToken} onPress = {async() => {
                const deviceToken = await GetDeviceToken();
                const user = await GetUser();
                const userObj = JSON.parse(user) 
                console.log(deviceToken)
                settoken({variables: {
                    deviceToken, username: userObj.username
                }})
            }}>
                <Text style = {styles.textBtn}>Sincronizar notificaciones</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.seeUsers} onPress = {async() => {
                navigation.navigate('Users')
            }}>
                <Text style = {styles.textBtn}>Ver usuarios</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
        </>
    )
}