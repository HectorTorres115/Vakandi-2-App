import React, {useState, useEffect} from 'react'
import {Button, ActivityIndicator} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import darkStyle from '../Styles/mapstyle'
import LocationStore from '../Redux/Redux-location-store'
import {subClient} from '../Clients/sub-client'
import {useMutation, ApolloProvider, Subscription} from 'react-apollo'
import {AskLocactions, LocationsListener} from '../Requests/Coordinacion'
import {handleAndroidBackButton} from '../Functions/backHandler'
import {backAction} from '../Functions/Logout'

export const Coordinacion = ({navigation}) => {
    //Lifecycle methods
    useEffect(() => {
        handleAndroidBackButton(() => navigation.navigate('MainClass'))
        return(() => {
            handleAndroidBackButton(backAction)
        })
    }, [])

    const [locations, setLocations] = useState([]);
    const [asklocations] = useMutation(AskLocactions);

    return(
        <>
        <ApolloProvider client = {subClient}>
        <Subscription 
        subscription = {LocationsListener}
        onSubscriptionData = {(data) => {
            setLocations([...locations, data.subscriptionData.data.LocationsListener])
        }}>
        {({loading, error}) => {
            // if(loading) return <ActivityIndicator size = 'large' color = 'blue'/>
            if(error) return <ActivityIndicator size = 'large' color = 'red'/>
            return null
        }}
        </Subscription>
        </ApolloProvider>
        <MapView
        customMapStyle={darkStyle}
        style={{ flex: 1, width: '100%', height: '100%', zIndex: -1 }}
        initialRegion={{
            latitude: LocationStore.getState().latitude,
            longitude: LocationStore.getState().longitude,
            latitudeDelta: 0.08,
            longitudeDelta: 0.08
        }}>
        {locations.map(marker => (
            <Marker
            title={marker.user} pinColor={'#00ff00'}
            coordinate={{
                "longitude": marker.longitude,
                "latitude": marker.latitude
            }}/>
        ))}
        </MapView>

        <Button title = 'Ask locations' onPress = {async() => await asklocations()}/>
        </>
    )
}