import React, {useState, useEffect} from 'react'
import {styles} from '../Styles/Login'
// import {requestPermission} from "../Functions/MapsPermission";
import {Header} from '../Components/Header'
import { View, Text, ImageBackground, Alert, TextInput, ActivityIndicator, PermissionsAndroid } from 'react-native'
import { TouchableOpacity } from 'react-native'
//React Apollo
import {useMutation} from 'react-apollo'
import {LoginM} from '../Requests/Users'
//Import Redux
import UserStore from '../Redux/Redux-user-store'
import {set_user} from '../Redux/Redux-actions'

export const Login = ({navigation}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Permitir acceso a localizacion",
              message:
                "Esta app requiere permisos de localizacion para realizar los pedidos.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
    }, [])

    const [login, {loading, error}] = useMutation(LoginM, {
        onCompleted: async(data) => {   
            try {
                UserStore.dispatch(set_user(data.Login))
                if(UserStore.getState().username !== 'Error' && UserStore.getState().active !== false) {
                    UserStore.dispatch(set_user(data.Login))
                    navigation.navigate('Main')
                } else {
                    Alert.alert('Usuario o contraseña incorrectos')
                }
            } catch (error) {
                console.log(error)
            }
        },
        onError: (error) => {
            console.log(error)
        }
    })

    function evaluate() {
        if(loading) {
            return <ActivityIndicator size = 'large' color = 'blue'/>
        } else {
            return (
            <TouchableOpacity style = {styles.loginBtn}
                onPress = {() => login({variables: {username, password}})}
                >
                <Text style = {styles.textBtn}>Login</Text>
            </TouchableOpacity>
            )
        }
    }
        
    return (
        <ImageBackground
        style = {{width: '100%', height: '100%'}}
        source = {require('../Images/vakandi-background.png')}>
        <Header/>
        <View style = {styles.main}>

            <View style = {styles.elsegurista}></View>

            <View style = {styles.form}>
                <TextInput 
                onChangeText = {(username) => setUsername(username)}
                maxLength = {20}
                style = {styles.input}
                placeholder = 'Username'/>

                <TextInput 
                onChangeText = {(password) => setPassword(password)}
                maxLength = {20}
                style = {styles.input}
                secureTextEntry = {true}
                placeholder = 'Password'/>

                {evaluate()}

                {/* <TouchableOpacity style = {styles.loginBtn}
                onPress = {() => login({variables: {username, password}})}
                >
                <Text style = {styles.textBtn}>Login</Text>
                </TouchableOpacity> */}
            </View>

            <View style = {styles.registerContainer}>
                <TouchableOpacity
                onPress = {() => navigation.navigate('Register')}
                >
                <Text style = {styles.registerBtn}>¿Aun no te has registrado?</Text>
                </TouchableOpacity>
            </View>

        </View>
        </ImageBackground>
    )
}