import PushNotification from 'react-native-push-notification'

export const Notification = (title, message) => {
    PushNotification.localNotification({
        title,
        message,
        playSound: true,
        soundName: 'default'
    })
}