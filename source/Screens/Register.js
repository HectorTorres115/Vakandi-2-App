import React, {useState} from 'react'
import {styles} from '../Styles/Register'
import { View, Text, ImageBackground, Image, Alert, TextInput, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import {Header} from '../Components/Header'
//React Apollo
import {useMutation} from 'react-apollo'
import {RegisterM} from '../Requests/Users'
import {GetDeviceToken} from '../Functions/GetDeviceToken'

export const Register = ({navigation}) => {
    const [name, setName] = useState('');
    const [name2, setName2] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastName2, setLastName2] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    
    const [register] = useMutation(RegisterM, {
        onCompleted: () => {
            Alert.alert('Tu peticion de registro ha sido enviada')
        },
        onError: (error) => {
            console.log(error)
            Alert.alert('Error al conectar con el servidor')
        }
    })

    return (
        <ImageBackground
        style = {{width: '100%', height: '100%'}}
        source = {require('../Images/vakandi-background.png')}>
        <Header/>
        <View style = {styles.main}>

            <ScrollView style = {{flex: 1/2, width: '95%', margin: 10, borderColor: 'white', borderWidth: 3, borderRadius: 10}}>
            <View style = {styles.form}>
                <View style = {styles.fieldContainer}>
                    <Text style = {styles.label}>Nombre: </Text>
                    <TextInput 
                    onChangeText = {(name) => setName(name)}
                    maxLength = {20}
                    style = {styles.input}
                    placeholder = 'Nombre'/>
                </View>

                <View style = {styles.fieldContainer}>
                    <Text style = {styles.label}>2do Nombre: </Text>
                    <TextInput 
                    onChangeText = {(name2) => setName2(name2)}
                    maxLength = {20}
                    style = {styles.input}
                    placeholder = '2do Nombre (opcional)'/>
                </View>

                <View style = {styles.fieldContainer}>
                    <Text style = {styles.label}>Apellido: </Text>
                    <TextInput 
                    onChangeText = {(lastName) => setLastName(lastName)}
                    maxLength = {20}
                    style = {styles.input}
                    placeholder = 'Apellido'/>
                </View>

                <View style = {styles.fieldContainer}>
                    <Text style = {styles.label}>2do Apellido: </Text>
                    <TextInput 
                    onChangeText = {(lastName2) => setLastName2(lastName2)}
                    maxLength = {20}
                    style = {styles.input}
                    placeholder = '2do Apellido'/>
                </View>

                <View style = {styles.fieldContainer}>
                    <Text style = {styles.label}>Username: </Text>
                    <TextInput 
                    onChangeText = {(username) => setUsername(username)}
                    maxLength = {20}
                    style = {styles.input}
                    placeholder = 'Username'/>
                </View>

                <View style = {styles.fieldContainer}>
                    <Text style = {styles.label}>Contraseña: </Text>
                    <TextInput 
                    onChangeText = {(password) => setPassword(password)}
                    maxLength = {20}
                    style = {styles.input}
                    secureTextEntry = {true}
                    placeholder = 'Contraseña'/>
                </View>

                <View style = {styles.fieldContainer}>
                    <Text style = {styles.label}>Confirme su contraseña: </Text>
                    <TextInput 
                    onChangeText = {(password2) => setPassword2(password2)}
                    maxLength = {20}
                    style = {styles.input}
                    secureTextEntry = {true}
                    placeholder = 'Confirme su contraseña'/>
                </View>
            </View>
            <TouchableOpacity style ={styles.registerBtn} onPress = {async() => {
                const deviceToken = await GetDeviceToken();
                if(password == password2){
                    if(name2 == '') {
                        register({variables: {
                            name, name2: 'NA', lastName, lastName2, username, password, deviceToken
                        }})
                    } else {
                        register({variables: {
                            name, name2, lastName, lastName2, username, password, deviceToken
                        }})
                    }
                } else {
                    Alert.alert('Las contraseñas no coinciden')
                }
            }}>
            <Text style = {styles.textBtn}>Register</Text>
            </TouchableOpacity>
            </ScrollView>

        </View>
        </ImageBackground>
    )
}