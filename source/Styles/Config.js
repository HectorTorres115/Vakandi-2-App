import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.4)'
    },
    text: {
        fontSize: 20,
        color: 'white',
        // fontWeight: 'bold'
    },
    textBtn: {
        fontSize: 20,
        color: 'white',
        margin: 20
        // fontWeight: 'bold'
    },
    setToken: {
        flex: 1/5,
        width: '90%',
        margin: 10,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: '#F6820D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    seeUsers: {
        flex: 1/5,
        width: '90%',
        margin: 10,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        alignItems: 'center'
    }
})