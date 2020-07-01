import React, { Component } from 'react'
import {styles} from '../Styles/Login'
import {Header} from '../Components/Header'
import { View, Text, ImageBackground, Alert, TextInput, ActivityIndicator, PermissionsAndroid } from 'react-native'
import { TouchableOpacity } from 'react-native'
//React Apollo
import {Mutation} from 'react-apollo'
import {LoginM} from '../Requests/Users'
//Import Redux
import UserStore from '../Redux/Redux-user-store'
import {set_user} from '../Redux/Redux-actions'
//Remember account
import {SetLog} from '../Functions/Logged'
import {SetUser} from '../Functions/UserStorage'

export class LoginClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        }
    }

    render() {
        const requestPermission = async() => {
            try {
                const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                  {
                    title: "Permitir acceso a localizacion",
                    message:
                    "Esta app requiere permisos de localizacion para realizar los pedidos.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                  }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  // console.log("You can use maps");
                } else {
                  // console.log("Permiso denegado");
                }
              } catch (err) {
                console.warn(err);
              }
        }
        requestPermission();

        return (
        <ImageBackground
        style = {{width: '100%', height: '100%'}}
        source = {require('../Images/vakandi-background.png')}>
        <Header/>
        <View style = {styles.main}>
            <View style = {styles.elsegurista}></View>
            <View style = {styles.form}>
                <TextInput 
                onChangeText = {(username) => this.setState({username})}
                maxLength = {20}
                style = {styles.input}
                placeholder = 'Username'/>

                <TextInput 
                onChangeText = {(password) => this.setState({password})}
                maxLength = {20}
                style = {styles.input}
                secureTextEntry = {true}
                placeholder = 'Password'/>

                <Mutation mutation = {LoginM}>
                {(login, {loading, error}) => {
                    if(loading) return <ActivityIndicator size = 'large' color = 'blue'/>
                    if(error) return <ActivityIndicator size = 'large' color = 'red'/>
                    return(
                    <TouchableOpacity style = {styles.loginBtn}
                    onPress = {async() => {
                        try {
                            const res = await login({
                                variables: {
                                    username: this.state.username,
                                    password: this.state.password
                                }
                            })
                            //Navigate to main and store user on redux
                            UserStore.dispatch(set_user(res.data.Login))
                            if(UserStore.getState().username !== 'Error' && UserStore.getState().active !== false) {
                                // UserStore.dispatch(set_user(res.data.Login))
                                // this.props.navigation.navigate('MainClass')
                                await SetLog(res.data.Login.active)
                                await SetUser(res.data.Login)
                            } else {
                                Alert.alert('Usuario o contraseña incorrectos')
                            }
                        } catch (error) {
                            console.log(error)
                        }
                    }}
                    >
                    <Text style = {styles.textBtn}>Login</Text>
                    </TouchableOpacity>
                    )
                }}
                </Mutation>
            </View>

            <View style = {styles.registerContainer}>
                <TouchableOpacity
                onPress = {() => this.props.navigation.navigate('Register')}
                >
                <Text style = {styles.registerBtn}>¿Aun no te has registrado?</Text>
                </TouchableOpacity>
            </View>

        </View>
        </ImageBackground>
        )
    }
}