import AsyncStorage from '@react-native-community/async-storage'

export const userKey = '@user_key';

export const SetUser = async(data) => {
    try {
        await AsyncStorage.setItem(userKey, JSON.stringify(data))
    } catch (error) {
        console.log('Setting error user:')
        console.log(error)
    }
}

export const GetUser = async() => {
    try {
        const user = await AsyncStorage.getItem(userKey)
        return user
    } catch (error) {
        console.log('Getting error user:')
        console.log(error)
        return 'No token'
    }
}

export const DeleteLog = async () => {
    try {
        await AsyncStorage.removeItem(userKey)
        console.log('Item removed user')
    } catch (error) {
        console.log('Deleting error user:')
        console.log(error)        
    }
}