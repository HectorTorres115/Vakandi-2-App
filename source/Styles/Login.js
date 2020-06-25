import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: 'purple',
        backgroundColor: 'rgba(0,0,0, 0.4)',
    },
    textBtn: {
        fontSize: 20,
        color: 'white',
        margin: 20,
        // fontWeight: 'bold'
    },
    registerBtn: {
        fontSize: 20,
        color: 'white',
        textDecorationLine: 'underline'
    },
    elsegurista: {
        height: 100,
        width: 200
    },
    form: {
        // flex: 2/4,
        // alignItems: 'center',
        height: 220,
        width: '90%',
        justifyContent: 'center',
        // borderColor: 'green',
        // borderWidth: 2,
    },
    registerContainer: {
        flex: 1/4,
        width: '90%',
        justifyContent: 'flex-end',
        alignItems: 'center'
        // borderColor: 'red',
        // borderWidth: 5,
    },
    loginBtn: {
        flex: 1/3,
        width: '95%',
        backgroundColor: 'rgba(33, 150, 243, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10
        // borderColor: 'green',
        // borderWidth: 4,
    },
    input: {
        flex: 1/4,
        height: '100%',
        backgroundColor: 'white',
        fontSize: 20,
        color: 'black',
        borderRadius: 10,
        margin: 10
    }
})