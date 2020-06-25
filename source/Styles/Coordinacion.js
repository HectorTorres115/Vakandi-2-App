import {StyleSheet} from 'react-native'

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
    blueBtn: {
        height: '8%',
        width: '90%',
        backgroundColor: "rgba(33, 150, 243, 0.6)",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    redBtn: {
        height: '8%',
        width: '90%',
        backgroundColor: 'rgba(255, 0, 0, 0.6)',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    yellowBtn: {
        height: '8%',
        width: '90%',
        backgroundColor: 'rgba(250, 204, 0, 0.6)',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
})