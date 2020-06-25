import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    textBtn: {
        fontSize: 20,
        color: 'white',
        margin: 20,
        // fontWeight: 'bold'
    },
    label: {
        marginLeft: 10,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    registerBtn: {
        flex: 1/8,
        width: '95%',
        margin: 10,
        backgroundColor: 'darkblue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    elsegurista: {
        height: 170,
        width: 170
    },
    form: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        // borderColor: 'green',
        // borderWidth: 5,
        // alignItems: 'center'
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
        backgroundColor: 'rgba(29, 171, 49, 1)',
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
    },
    fieldContainer: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        // borderColor: 'yellow',
        // borderWidth: 2
    }
})