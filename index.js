/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import {Notification} from './source/Functions/ShowNotification';
//Import redux location store
import Geolocation from '@react-native-community/geolocation';
import LocationStore from './source/Redux/Redux-location-store';
import {set_location} from './source/Redux/Redux-actions';
//Import send location
import {SendLocation} from './source/Functions/SendLocation';

messaging().setBackgroundMessageHandler(async payload => {
    if(payload.data.order) {
        console.log('Order received')
        const res = await SendLocation();
        console.log(res)
    }
    // console.log(payload.data)
    Notification(payload.data.title, payload.data.message)
})

messaging().onMessage(async payload => {
    if(payload.data.order) {
        console.log('Order received')
        const res = await SendLocation();
        console.log(res)
    }
    // console.log(payload.data)
    Notification(payload.data.title, payload.data.message)
})

const MyHeadlessTask = async () => {
    Geolocation.watchPosition((info) => {
        LocationStore.dispatch(set_location({
        longitude: info.coords.longitude,
        latitude: info.coords.latitude
    }))
    }, (error) => console.log(error),
    {enableHighAccuracy: true, distanceFilter: 0, useSignificantChanges: false, maximumAge: 0})
};

AppRegistry.registerHeadlessTask('Location', () => MyHeadlessTask);
AppRegistry.registerComponent(appName, () => App);