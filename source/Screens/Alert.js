import React, {useState, useEffect} from 'react'
import {styles} from '../Styles/Alert'
import {Header} from '../Components/Header'
import { View, Text, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
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
import {AlertListener} from '../Components/Listeners'
import {PanicListener} from '../Components/Listeners'
//Import user from async storage
import {GetUser} from '../Functions/UserStorage'

export const Alert = ({navigation}) => {
    //Lifecycle methods
    useEffect(() => {
        return(() => {
            BackStore.dispatch(set_back(true))
        })
    }, [])
    //State
    const [alerts, setAlerts] = useState();
    const [alert, setAlert] = useState('');
    //Apollo queries
    const {loading, error} = useQuery(GetMessagesQ, {
        fetchPolicy: "no-cache",
        variables: {type: 'Alert'},
        onCompleted: (data) => {
            console.log(data.GetMessages)
            setAlerts(data.GetMessages)
        },
        onError: (error) => {
            console.log(error)
        }
    })
    const [createmessage] = useMutation(CreateMessageM, {
        onCompleted: () => {
            console.log('Message sended')
            setAlert('')
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

            <AlertListener alerts = {alerts} setter = {setAlerts}/>

            <View style = {styles.listContainer}>
                <DisplayAlert navigation = {navigation} data = {alerts}/>
            </View>
            <View style = {styles.inputContainer}>
                <TextInput
                value = {alert}
                onChangeText = {(alert) => setAlert(alert)}
                style = {styles.input}
                placeholder = 'Alert'
                maxLength = {100}
                multiline = {true}
                />
                <TouchableOpacity style = {styles.sendBtn}
                onPress = {async() => {
                    const user = await GetUser();
                    const userObj = JSON.parse(user) 
                    if(alert !== '') {
                        createmessage({variables: {
                            user: userObj.username,
                            message: alert,
                            type: "Alert",
                            longitude: LocationStore.getState().longitude,
                            latitude: LocationStore.getState().latitude
                        }})
                    } else {
                        createmessage({variables: {
                            user: userObj.username,
                            message: 'Alert',
                            type: "Alert",
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