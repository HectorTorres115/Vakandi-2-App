import React, {useState} from 'react'
import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import darkStyle from '../Styles/mapstyle'
import LocationStore from '../Redux/Redux-location-store'
import {useMutation} from 'react-apollo'
import messaging from '@react-native-firebase/messaging';


export const Coordinacion = () => {
    const [locations, setLocations] = useState([
        {user: "Guardia(cedros)", longitude: -107.45221850000001, latitude: 24.821747999999996, id: 7},
        {user: "Guardia(olivos)", longitude: -107.4165494, latitude: 24.8257382, id: 8},
    ]);

    return(
        <View style = {{flex: 1}}>
            <MapView
            customMapStyle={darkStyle}
            style={{ flex: 1 }}
            initialRegion={{
                latitude: 24.821747999999996,
                longitude: -107.45221850000001,
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
        </View>
    )
}