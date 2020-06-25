import AsyncStorage from '@react-native-community/async-storage'

export const tokenKey = '@token_key';

export const SetLog = async(data) => {
    try {
        let token = data.toString()
        await AsyncStorage.setItem(tokenKey, token)
    } catch (error) {
        console.log('Setting error:')
        console.log(error)
    }
}

export const GetLog = async() => {
    try {
        const token = await AsyncStorage.getItem(tokenKey)
        return token
    } catch (error) {
        console.log('Getting error:')
        console.log(error)
        return 'No token'
    }
}

export const DeleteLog = async () => {
    try {
        await AsyncStorage.removeItem(tokenKey)
        console.log('Item removed')
    } catch (error) {
        console.log('Deleting error:')
        console.log(error)        
    }
}