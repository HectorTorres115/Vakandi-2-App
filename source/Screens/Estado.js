import React, {useState, useEffect } from 'react'
import { useQuery ,useLazyQuery, useMutation } from 'react-apollo'
import {styles} from '../Styles/Estado'
import {Header} from '../Components/Header'
import {GetLocations, GetElements, GetElementsAlpha, GetElementsLocation} from '../Requests/Estado'
import { 
View, Text, 
FlatList, ImageBackground, TouchableOpacity, Picker
} from 'react-native'
//Element store
import ElementStore from '../Redux/Redux-element-store'
import {set_element} from '../Redux/Redux-actions'
//Handle back functions
// import BackStore from '../Redux/Redux-back-store'
// import {set_back} from '../Redux/Redux-actions'
import {handleAndroidBackButton} from '../Functions/backHandler'
import {backAction} from '../Functions/Logout'

export const Estado = ({navigation}) => {
    //Lifecycle methods
    useEffect(() => {
        handleAndroidBackButton(() => navigation.navigate('MainClass'))
        return(() => {
            // BackStore.dispatch(set_back(true))
            handleAndroidBackButton(backAction)
        })
    }, [])
    //State
    const [locations, setLocations] = useState([]);
    const [elements, setElements] = useState([]);
    const [pickerV, setPickerV] = useState('');
    //Graphql queries
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

    const [getelements] = useLazyQuery(GetElements, {
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            console.log(data)
            setElements(data.GetElements)
            console.log('Completed')
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const [getelementsalpha] = useLazyQuery(GetElementsAlpha, {
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            console.log(data)
            setElements(data.GetElementsAlpha)
            console.log('Completed')
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const [getelementslocation] = useLazyQuery(GetElementsLocation, {
        fetchPolicy: 'no-cache',
        onCompleted: (data) => {
            console.log(data)
            setElements(data.GetElementsLocation)
            console.log('Completed')
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return(
        <>
        <Header/>
        <ImageBackground
        style = {{width: '100%', height: '100%'}}
        source = {require('../Images/vakandi-background.png')}>
        <View style = {styles.main}>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity 
                style = {styles.abc} onPress = {() => {
                    getelementsalpha()
                }}>
                <Text style = {styles.text}>ABC</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style = {styles.todo} onPress = {() => {
                    getelements()
                }}>
                <Text style = {styles.text}>TODO</Text>
                </TouchableOpacity>

                <Picker
                style = {{flex: 1, height: 35, backgroundColor: 'white'}} 
                mode = 'dropdown'
                selectedValue = {pickerV}
                onValueChange = {(value) => {
                    if(value == 'No selected') {
                        setPickerV(value)
                        getelements()
                    } else {
                        console.log(value)
                        setPickerV(value)
                        getelementslocation({variables: {
                            location: value
                        }})
                    }
                }}
                >
                <Picker.Item label= 'No selected' value= 'No selected' key={115}/>
                {locations.map((item, index) => {
                    return <Picker.Item label={item.location} value={item.location} key={index}/>
                })}
                </Picker>
            </View>
            <View style = {styles.listContainer}>
                <FlatList
                data = {elements}
                keyExtractor = {(item) => item.id}
                renderItem = {({item}) => (
                    <TouchableOpacity style = {styles.elementCard} onPress = {() => {
                        console.log('Element = ' + JSON.stringify(item))
                        ElementStore.dispatch(set_element(item))
                        navigation.navigate('ShowElement')
                    }}>
                        <Text style = {{fontSize: 20, color: 'black'}}>{item.name}  {item.lastName}  {item.lastName2}</Text>
                    </TouchableOpacity>
                )}
                >
                </FlatList>
            </View>
        </View>
        </ImageBackground>
        </>
    )
}