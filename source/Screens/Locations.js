import React, {useState, useEffect} from 'react'
import {useQuery, useMutation} from 'react-apollo'
import {Header} from '../Components/Header'
import {styles} from '../Styles/Locations'
import { View, Alert, FlatList, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import {GetLocations, CreateLocation, UpdateLocation, DeleteLocation} from '../Requests/Locations'
//Handle back functions
import BackStore from '../Redux/Redux-back-store'
import {set_back} from '../Redux/Redux-actions'

export const Locations = () => {
    //Lifecycle methods
    useEffect(() => {
        return(() => {
            BackStore.dispatch(set_back(true))
        })
    }, [])
    //State
    const [locations, setLocations] = useState([]);
    const [input, setInput] = useState('');
    const [location, setLocation] = useState('');
    //React apollo
    const {data} = useQuery(GetLocations, {
        fetchPolicy: 'no-cache',
        onCompleted: () => {
            console.log(data)
            setLocations(data.GetLocations)
            console.log('Completed')
        },
        onError: (error) => {
            console.log(error)
        }
    })
    const [createlocation] = useMutation(CreateLocation, {
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            const newArray = [...locations, data.CreateLocation]
            console.log(newArray)
            setLocations(newArray)
            console.log('Completed')
        },
        onError: (error) => {
            console.log(error)
        }
    })
    const [updatelocation] = useMutation(UpdateLocation, {
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            console.log(data.UpdateLocation)
            const newArray = locations.map((loc) => {
                if(loc.id == data.UpdateLocation.id) {
                    return loc = data.UpdateLocation
                } else {
                    return loc
                }
            })
            setLocations(newArray)
            console.log('Completed')
        },
        onError: (error) => {
            console.log(error)
        }
    })
    const [deletelocation] = useMutation(DeleteLocation, {
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            console.log(data.DeleteLocation)
            const newArray = locations.filter((loc) => loc.id !== data.DeleteLocation.id)
            setLocations(newArray)
            console.log('Completed')
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return(
        <>
        <ImageBackground
        style = {{width: '100%', height: '100%'}}
        source = {require('../Images/vakandi-background.png')}>
        <Header/>
        <View style = {styles.main}>
            <View style = {styles.listContainer}>
                <FlatList
                data = {locations}
                keyExtractor = {(item) => item.id}
                renderItem = {({item}) => (
                    <View style = {styles.locationContainer}>
                        <TextInput
                        editable = {false}
                        // onChangeText = {(text) => setInput(text)}
                        placeholder = {item.location}
                        placeholderTextColor = 'black'
                        style = {styles.output}/>

                        <TouchableOpacity style = {styles.editBtn} onPress = {() => {
                            if(location !== '') {
                                updatelocation({variables: {id: item.id, location: location}})
                            } else {
                                Alert.alert('Input vacio')
                            }
                        }}>
                            <ImageBackground
                            style = {{width: 40, height: 40}}
                            source = {require('../Images/EditW.png')}>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.deleteBtn} onPress = {() => {
                            deletelocation({variables: {id: item.id}})
                        }}>
                            <ImageBackground
                            style = {{width: 40, height: 40}}
                            source = {require('../Images/DeleteW.png')}>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                )}
                />
            </View> 
            <View style = {styles.addContainer}>
                <TextInput 
                onChangeText = {(location) => setLocation(location)}
                placeholder = 'Nueva localizacion'
                style = {styles.input}/>
                <TouchableOpacity style = {styles.sendBtn} onPress = {() => {
                    if(location !== '') {
                        createlocation({variables: {location}})
                    } else {
                        Alert.alert('Input vacio')
                    }
                }}>
                    <ImageBackground
                    style = {{width: 50, height: 50}}
                    source = {require('../Images/sendW.png')}>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
        </>
    )
}