import React, {useState, useEffect} from 'react'
import {useMutation, useQuery} from 'react-apollo'
import { View, Text, Alert, ScrollView, TextInput, TouchableOpacity, Picker } from 'react-native'
import {styles} from '../Styles/Element'
import {CreateElement} from '../Requests/Element'
//Handle back functions
// import BackStore from '../Redux/Redux-back-store'
// import {set_back} from '../Redux/Redux-actions'
import {handleAndroidBackButton} from '../Functions/backHandler'
import {backAction} from '../Functions/Logout'
//React apolllo queries
import {GetLocations} from '../Requests/Locations'

export const Element = ({navigation}) => {
    //Lifecycle methods
    useEffect(() => {
        handleAndroidBackButton(() => navigation.navigate('MainClass'))
        return(() => {
            // BackStore.dispatch(set_back(true))
            handleAndroidBackButton(backAction)
        })
    }, [])
    //Element state form
    const [ name, setName ] = useState('');
    const [ name2, setName2 ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ lastName2, setLastName2 ] = useState('');
    const [ location, setLocation ] = useState('No asignado');
    const [ restday, setRestday ] = useState('');
    const [ nss, setNss ] = useState('');
    const [ celphone, setCelphone ] = useState('');
    const [ workdays, setWordays ] = useState('');
    //Locations state
    const [locations, setLocations] = useState([]);
    //Graphql operations
    const [createlement] = useMutation(CreateElement, {
        onCompleted: () => {
            Alert.alert('El elemento ha sido creado')
            console.log('Completed')
            setName('')
            setName2('')
            setLastName('')
            setLastName2('')
            location('')
            restday('')
            nss('')
            celphone('')
            workdays('')
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
    <ScrollView>
    <View style = {styles.container}>
        <View style = {styles.personalData}>

            <View style = {styles.inputContainer}>
                <Text style = {styles.label}>Nombre: </Text>
                <TextInput style = {styles.input} 
                value = {name}
                maxLength = {20}
                onChangeText = {(name) => setName(name)}
                placeholder = 'Nombre'
                />
            </View>

            <View style = {styles.inputContainer}>
                <Text style = {styles.label}>Segundo nombre: </Text>
                <TextInput style = {styles.input} 
                value = {name2}
                maxLength = {20}
                onChangeText = {(name2) => setName2(name2)}
                placeholder = '2do Nombre (opcional)'
                />
            </View>

            <View style = {styles.inputContainer}>
                <Text style = {styles.label}>Apellido paterno: </Text>
                <TextInput style = {styles.input} 
                value = {lastName}
                maxLength = {20}
                onChangeText = {(lastName) => setLastName(lastName)}
                placeholder = 'Apellido paterno'
                />
            </View>

            <View style = {styles.inputContainer}>
                <Text style = {styles.label}>Apellido materno: </Text>
                <TextInput style = {styles.input} 
                value = {lastName2}
                maxLength = {20}
                onChangeText = {(lastName2) => setLastName2(lastName2)}
                placeholder = 'Apellido materno'
                />
            </View>

            <View style = {styles.inputContainer}>
                <Text style = {styles.label}>Punto: </Text>
                <Picker
                style = {{width: '90%', height: 50, backgroundColor: 'white', margin: 10, textAlign: 'right'}} 
                mode = 'dropdown'
                selectedValue = {location}
                onValueChange = {(value) => {
                    setLocation(value)
                    // console.log(value)
                }}
                >
                <Picker.Item label= 'No asignado' value= 'No asignado' key={115}/>
                {locations.map((item, index) => {
                    return <Picker.Item label={item.location} value={item.location} key={index}/>
                })}
                </Picker>
            </View>

            <View style = {styles.inputContainer}>
                <Text style = {styles.label}>Dia de descanso: </Text>
                <TextInput style = {styles.input} 
                value = {restday}
                maxLength = {20}
                onChangeText = {(restday) => setRestday(restday)}
                placeholder = 'Dia de descanso'
                />
            </View>

            <View style = {styles.inputContainer}>
                <Text style = {styles.label}>N.S.S: </Text>
                <TextInput style = {styles.input} 
                value = {nss}
                maxLength = {11}
                onChangeText = {(nss) => setNss(nss)}
                placeholder = 'Numero de seguro social'
                />
            </View>

            <View style = {styles.inputContainer}>
                <Text style = {styles.label}>Celular: </Text>
                <TextInput style = {styles.input} 
                value = {celphone}
                maxLength = {20}
                onChangeText = {(celphone) => setCelphone(celphone)}
                placeholder = 'Telefono celular'
                />
            </View>

            <View style = {styles.inputContainer}>
                <Text style = {styles.label}>Dias laborados: </Text>
                <TextInput style = {styles.input} 
                value = {workdays}
                maxLength = {20}
                onChangeText = {(wordays) => setWordays(wordays)}
                placeholder = 'Dias laborados'
                />
            </View>

            <TouchableOpacity style = {styles.btnRegister} onPress = {() => {
                createlement({
                    variables: {
                        name,
                        name2,
                        lastName,
                        lastName2,
                        location,
                        restday,
                        nss,
                        celphone,
                        workdays
                    }
                })
            }}>
                <Text style = {styles.text}>Register</Text>
            </TouchableOpacity>

        </View>
    </View>
    </ScrollView>
    )
}