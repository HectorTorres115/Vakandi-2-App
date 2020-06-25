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
    listContainer: {
        flex: 9/8,
        width: '100%',
        // borderWidth: 2,
        // borderColor: 'purple'
    },
    inputContainer: {
        // flex: 1/5,
        height: 80,
        width: '100%',
        borderWidth: 2,
        // borderTopColor: 'white',
        // borderColor: 'green',
        flexDirection: 'row'
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
    input: {
        flex: 3/4,
        height: '100%',
        backgroundColor: 'white',
        fontSize: 20,
        color: 'black',
    },
    sendBtn: {
        flex: 1/4,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkblue'
    }
})