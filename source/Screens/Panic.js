import React, {useState, useEffect} from 'react'
import {styles} from '../Styles/Panic'
import {Header} from '../Components/Header'
import { View, Text, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator, Image } from 'react-native'
//Handle back functions
import BackStore from '../Redux/Redux-back-store'
import {set_back} from '../Redux/Redux-actions'
//Import react apollo
import {useMutation, useQuery} from 'react-apollo'
import {GetMessagesQ, CreateMessageM} from '../Requests/Messages'
//Import stores
import LocationStore from '../Redux/Redux-location-store'
import UserStore from '../Redux/Redux-user-store'
//Import Flatlist component
import {DisplayAlert} from '../Components/DisplayAlert'
import {PanicListener} from '../Components/Listeners'
//Import user from async storage
import {GetUser} from '../Functions/UserStorage'

export const Panic = ({navigation}) => {
    //Lifecycle methods
    useEffect(() => {
        return(() => {
            console.log('Component did unmount')
            BackStore.dispatch(set_back(true))
        })
    }, [])
    //State
    const [panics, setPanics] = useState();
    const [panic, setPanic] = useState('');
    //Apollo queries
    const {loading, error} = useQuery(GetMessagesQ, {
        fetchPolicy: "no-cache",
        variables: {type: 'Panic'},
        onCompleted: (data) => {
            console.log(data.GetMessages)
            setPanics(data.GetMessages)
        },
        onError: (error) => {
            console.log(error)
        }
    })
    const [createmessage] = useMutation(CreateMessageM, {
        onCompleted: () => {
            console.log('Message sended')
            setPanic('')
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

            <PanicListener panics = {panics} setter = {setPanics}/>

            <View style = {styles.listContainer}>
                <DisplayAlert navigation = {navigation} data = {panics}/>
            </View>
            <View style = {styles.inputContainer}>
                <TextInput
                value = {panic}
                onChangeText = {(panic) => setPanic(panic)}
                style = {styles.input}
                placeholder = 'Panic'
                maxLength = {100}
                multiline = {true}
                />
                <TouchableOpacity style = {styles.sendBtn}
                onPress = {async() => {
                    const user = await GetUser();
                    const userObj = JSON.parse(user) 
                    if(panic !== '') {
                        createmessage({variables: {
                            user: userObj.username,
                            message: panic,
                            type: "Panic",
                            longitude: LocationStore.getState().longitude,
                            latitude: LocationStore.getState().latitude
                        }})
                    } else {
                        createmessage({variables: {
                            user: userObj.username,
                            message: 'Panic',
                            type: "Panic",
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