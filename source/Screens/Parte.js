import React, {useState, useEffect} from 'react'
import {styles} from '../Styles/Parte'
import {Header} from '../Components/Header'
import { View, Text, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
//Handle back functions
// import BackStore from '../Redux/Redux-back-store'
// import {set_back} from '../Redux/Redux-actions'
import {handleAndroidBackButton} from '../Functions/backHandler'
import {backAction} from '../Functions/Logout'
//Import react apollo
import {useMutation, useQuery} from 'react-apollo'
import {GetMessagesQ, CreateMessageM} from '../Requests/Messages'
//Import stores
import LocationStore from '../Redux/Redux-location-store'
import UserStore from '../Redux/Redux-user-store'
//Import Flatlist component
import {DisplayAlert} from '../Components/DisplayAlert'
import {ParteListener} from '../Components/Listeners'
import {PanicListener} from '../Components/Listeners'
//Import user from async storage
import {GetUser} from '../Functions/UserStorage'

export const Parte = ({navigation}) => {
    //Lifecycle methods
    useEffect(() => {
        handleAndroidBackButton(() => navigation.navigate('MainClass'))
        return(() => {
            handleAndroidBackButton(backAction)
            // BackStore.dispatch(set_back(true))
        })
    }, [])
    //State
    const [partes, setPartes] = useState();
    const [parte, setParte] = useState('');
    //Apollo queries
    const {loading, error} = useQuery(GetMessagesQ, {
        fetchPolicy: "no-cache",
        variables: {type: 'Parte'},
        onCompleted: (data) => {
            console.log(data.GetMessages)
            setPartes(data.GetMessages)
        },
        onError: (error) => {
            console.log(error)
        }
    })
    const [createmessage] = useMutation(CreateMessageM, {
        onCompleted: () => {
            console.log('Message sended')
            setParte('')
        },
        onError: (error) => {
            console.log(error)
        }
    })

    if(loading) return <ActivityIndicator size = 'large' color = 'blue'/>
    if(error) return <ActivityIndicator size = 'large' color = 'red'/>

    return (
        <ImageBackground
        style = {{width: '100%', height: '100%'}}
        source = {require('../Images/vakandi-background.png')}>
        <Header/>
        <View style = {styles.main}>

            <ParteListener partes = {partes} setter = {setPartes}/>

            <View style = {styles.listContainer}>
                <DisplayAlert navigation = {navigation} data = {partes}/>
            </View>
            <View style = {styles.inputContainer}>
                <TextInput
                value = {parte}
                onChangeText = {(parte) => setParte(parte)}
                style = {styles.input}
                placeholder = 'Parte'
                maxLength = {100}
                multiline = {true}
                />
                <TouchableOpacity style = {styles.sendBtn}
                onPress = {async() => {
                    const user = await GetUser();
                    const userObj = JSON.parse(user) 
                    if(parte !== '') {
                        createmessage({variables: {
                            user: userObj.username,
                            message: parte,
                            type: "Parte",
                            longitude: LocationStore.getState().longitude,
                            latitude: LocationStore.getState().latitude
                        }})
                    } else {
                        createmessage({variables: {
                            user: userObj.username,
                            message: 'Parte',
                            type: "Parte",
                            longitude: LocationStore.getState().longitude,
                            latitude: LocationStore.getState().latitude
                        }})
                    }
                }}>
                    <ImageBackground
                    style = {{width: 50, height: 50}}
                    source = {require('../Images/sendW.png')}>
                    </ImageBackground>
                {/* <Text style = {styles.textBtn}>Enviar</Text> */}
                </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
    )
}