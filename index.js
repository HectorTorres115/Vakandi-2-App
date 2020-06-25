/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import {Notification} from './source/Functions/ShowNotification';

messaging().setBackgroundMessageHandler(async payload => {
    // console.log(payload.data)
    Notification(payload.data.title, payload.data.message)
})

messaging().onMessage(async payload => {
    // console.log(payload.data)
    Notification(payload.data.title, payload.data.message)
})

AppRegistry.registerComponent(appName, () => App);