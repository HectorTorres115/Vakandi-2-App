import React, {useState} from 'react'
import { styles } from '../Styles/Users'
import { View, Text, ImageBackground, TouchableOpacity, FlatList, Alert } from 'react-native'
//Set token stuff
import UserStore from '../Redux/Redux-user-store'
import {GetUsers, UpdateUser} from '../Requests/Users'
import {useMutation, useQuery} from 'react-apollo'

export const Users = () => {
    //State
    const [users, setUsers] = useState([]);
    //React apollo
    const {data} = useQuery(GetUsers, {
        fetchPolicy: 'no-cache',
        onCompleted: () => {
            console.log(data)
            setUsers(data.GetUsers)
            console.log('Completed')
        },
        onError: (error) => {
            console.log(error)
        }
    })
    const [updateuser] = useMutation(UpdateUser, {
        onCompleted: (data) => {
            console.log('User Updated')
            const useru = data.UpdateUser
            const newArray = users.map((useri) => {
                if(useri.id == useru.id) {
                    useri = useru
                    console.log('Find it')
                    return useri
                } else {
                    return useri
                }
            })
            setUsers(newArray)
        },
        onError: (error) => {
            console.log(error)
        }
    })

    function isAdmin(item) {
        if(item.type == 'admin') {
           return(
            <TouchableOpacity style = {styles.buttonContainer}
            onPress = {() => {
                Alert.alert(
                '¿Cambiar permisos de usuario?',
                '',
                [
                {text: 'Cancelar', onPress: () => console.log('Do nothing')},
                {text: 'Volver customer', onPress: () => {
                    updateuser({variables: {
                        id: item.id,
                        type: 'customer',
                        active: true
                    }})
                }},
                {text: 'Volver usuario', onPress: () => {
                    updateuser({variables: {
                        id: item.id,
                        type: 'user',
                        active: true
                    }}) 
                }},
                ]
                )
            }}>
                <Text style={styles.field}>Tipo:</Text>
                <Text style={styles.text}>{item.type}</Text>
            </TouchableOpacity>
           ) 
        } else if(item.type == 'user'){
           return (
            <TouchableOpacity style = {styles.buttonContainer}
            onPress = {() => {
                Alert.alert(
                '¿Cambiar permisos de usuario?',
                '',
                [
                {text: 'Cancelar', onPress: () => console.log('Do nothing')},
                {text: 'Volver admin', onPress: () => {
                    updateuser({variables: {
                        id: item.id,
                        type: 'admin',
                        active: true
                    }})
                }},
                {text: 'Volver customer', onPress: () => {
                    updateuser({variables: {
                        id: item.id,
                        type: 'customer',
                        active: true
                    }})
                }},
                ]
                )
            }}>
                <Text style={styles.field}>Tipo:</Text>
                <Text style={styles.text}>{item.type}</Text>
            </TouchableOpacity>
           )
        } else if (item.type == 'customer') {
            return (
            <TouchableOpacity style = {styles.buttonContainer}
            onPress = {() => {
                Alert.alert(
                '¿Cambiar permisos de usuario?',
                '',
                [
                {text: 'Cancelar', onPress: () => console.log('Do nothing')},
                {text: 'Volver admin', onPress: () => {
                    updateuser({variables: {
                        id: item.id,
                        type: 'admin',
                        active: true
                    }})
                }},
                {text: 'Volver usuario', onPress: () => {
                    updateuser({variables: {
                        id: item.id,
                        type: 'user',
                        active: true
                    }})
                }},
                ]
                )
            }}>
                <Text style={styles.field}>Tipo:</Text>
                <Text style={styles.text}>{item.type}</Text>
            </TouchableOpacity>
            )
        }
    }   

    function isActive(item) {
        if(item.active == true) {
            return(
            <TouchableOpacity style = {styles.buttonContainer}
            onPress = {() => {
                Alert.alert(
                    'Modificando el estado del usuario',
                    '',
                    [
                    {text: 'Cambiar a inactivo', onPress: () => {
                        updateuser({
                            variables: {
                                id: item.id,
                                type: item.type,
                                active: false
                            }
                        })
                    }},
                    {text: 'Cancelar', onPress: () => console.log('DO NOTHING')}
                    ]
                )
            }}>
                <Text style={styles.field}>Status:</Text>
                <Text style={styles.text}>Activo</Text>
            </TouchableOpacity>
            )
        } else if (item.active == false) {
            return(
            <TouchableOpacity style = {styles.buttonContainer} onPress = {() => {
                Alert.alert(
                    'Modificando el estado del usuario',
                    '',
                    [
                    {text: 'Cambiar a activo', onPress: () => {
                        updateuser({
                            variables: {
                                id: item.id,
                                type: item.type,
                                active: true
                            }
                        })
                    }},
                    {text: 'Cancelar', onPress: () => console.log('DO NOTHING')}
                    ]
                )
            }}>
                <Text style={styles.field}>Status:</Text>
                <Text style={styles.text}>Inactivo</Text>
            </TouchableOpacity>
            )
        } else {
            return null
        }
    }

    return(
        <>
        <ImageBackground
        style = {{width: '100%', height: '100%'}}
        source = {require('../Images/vakandi-background.png')}>
        <FlatList
        data = {users}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => (
            <View style = {styles.card}>
                <View style = {styles.buttonContainer}>
                    <Text style={styles.field}>Nombre:</Text>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
                <View style = {styles.buttonContainer}>
                    <Text style={styles.field}>Apellido:</Text>
                    <Text style={styles.text}>{item.lastName}</Text>
                </View>
                <View style = {styles.buttonContainer}>
                    <Text style={styles.field}>Usuario:</Text>
                    <Text style={styles.text}>{item.username}</Text>
                </View>
                {isAdmin(item)}
                {isActive(item)}
            </View>
        )}/>
        </ImageBackground>
        </>
    )
}