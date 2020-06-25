import React, {useState} from 'react'
//React apollo
import {useMutation, useQuery} from 'react-apollo'
import {AddWorkday, UpdateElement} from '../Requests/Element'
//React native
import {Header} from '../Components/Header'
import {View, Text, StyleSheet, TouchableOpacity, Alert, Picker} from 'react-native'
//Element store
import ElementStore from '../Redux/Redux-element-store'
import {set_element} from '../Redux/Redux-actions'
//Locations
import {GetLocations} from '../Requests/Locations'

function workdaysnull(element) {
    if(element.workdays == null) {
        return <Text style = {styles.text}>No hay dias laborados</Text>
    } else {
        return <Text style = {styles.text}>{element.workdays}</Text>
    }
}

export const ShowElement = () => {
    //Element object from redux
    const [element, setElement] = useState(ElementStore.getState())
    //Picker state
    const [ location, setLocation ] = useState('No asignado');
    const [ locations, setLocations ] = useState([]);
    //React apollo
    const [addworkday] = useMutation(AddWorkday, {
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            ElementStore.dispatch(set_element(data.AddWorkDay))
            setElement(data.AddWorkDay)
            console.log('Completed')
            console.log(data.AddWorkDay)
        },
        onError: (error) => {
            console.log(error)
        }  
    })
    const [updateelement] = useMutation(UpdateElement, {
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            ElementStore.dispatch(set_element(data.UpdateElement))
            setElement(data.UpdateElement)
            setLocation(data.UpdateElement.location)
            Alert.alert('El punto ha sido asignado')
            console.log('Completed')
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }  
    })
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
    return(
        <>
        <Header/>
        <View style = {styles.main}>
            <View style = {styles.textContainer}>
                <Text style = {styles.boldText}>Nombre:</Text>
                <Text style = {styles.text}>{element.name}</Text>
            </View>

            <View style = {styles.textContainer}>
                <Text style = {styles.boldText}>Segundo Nombre:</Text>
                <Text style = {styles.text}>{element.name2}</Text>
            </View>

            <View style = {styles.textContainer}>
                <Text style = {styles.boldText}>Apellido paterno:</Text>
                <Text style = {styles.text}>{element.lastName}</Text>
            </View>

            <View style = {styles.textContainer}>
                <Text style = {styles.boldText}>Apellido materno:</Text>
                <Text style = {styles.text}>{element.lastName2}</Text>
            </View>

            <View style = {styles.textContainer}>
                <Text style = {styles.boldText}>Punto:</Text>
                <Picker
                style = {{flex: 1, height: 50, backgroundColor: '#ebeef2', margin: 0}} 
                mode = 'dialog'
                selectedValue = {element.location}
                onValueChange = {(value) => {
                    // setLocation(value)
                    updateelement({
                        variables: {
                            id: element.id,
                            location: value
                        }
                    })
                }}
                >
                <Picker.Item label= 'No asignado' value= 'No asignado' key={115}/>
                {locations.map((item, index) => {
                    return <Picker.Item label={item.location} value={item.location} key={index}/>
                })}
                </Picker>
                {/* <Text style = {styles.text}>{element.location}</Text> */}
            </View>

            <View style = {styles.textContainer}>
                <Text style = {styles.boldText}>Dia de decanso:</Text>
                <Text style = {styles.text}>{element.restday}</Text>
            </View>

            <View style = {styles.textContainer}>
                <Text style = {styles.boldText}>N.S.S:</Text>
                <Text style = {styles.text}>{element.nss}</Text>
            </View>

            <View style = {styles.textContainer}>
                <Text style = {styles.boldText}>Celular:</Text>
                <Text style = {styles.text}>{element.celphone}</Text>
            </View>

            <TouchableOpacity style = {styles.textContainer} onPress = {() => {
                Alert.alert(
                    '¿Aumentar un dia?',
                    '',
                    [
                        {text: 'Aceptar', onPress: () => {
                            addworkday({variables: {
                                id: element.id
                            }})
                        }},
                        {text: 'Cancelar', onPress: () => {
                            console.log('Do nothing');
                        }},
                    ]
                )
            }}>
                <Text style = {styles.boldText}>Dias laborados:</Text>
                {workdaysnull(element)}
            </TouchableOpacity>
        </View>
        </>
    )
}

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ebeef2',
    },
    text: {
        fontSize: 20,
        color: 'black',
        margin: 10,
        // fontWeight: 'bold'
    },
    boldText: {
        fontSize: 20,
        margin: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    textContainer: {
        // flex: 1/2,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#ebeef2',
        borderBottomColor: 'black',
        // borderColor: 'red',
        borderWidth: 2
    },
    buttonContainer: {
        // flex: 1/9,
        // borderWidth: 2,
        // borderColor: 'green',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    listContainer: {
        flex: 8/9,
        width: '100%',
        // borderWidth: 2,
        // borderColor: 'green',
        alignItems: 'flex-start',
        flexDirection: 'row',
    }
})