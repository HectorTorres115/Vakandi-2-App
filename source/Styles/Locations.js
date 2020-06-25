import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#ebeef2',
    },
    text: {
        fontSize: 20,
        color: 'black',
        margin: 10,
        // fontWeight: 'bold'
    },
    boldText: {
        fontSize: 20,
        margin: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    output: {
        flex: 3/4,
        backgroundColor: '#ebeef2',
        color: 'black',
        fontSize: 20,
    },
    input: {
        flex: 3/4,
        height: '100%',
        backgroundColor: '#ebeef2',
        color: 'black',
        fontSize: 20,
    },

    sendBtn: {
        flex: 1/4,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkblue',
    },
    editBtn: {
        flex: 1/8,
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteBtn: {
        flex: 1/8,
        backgroundColor: '#f62439',
        justifyContent: 'center',
        alignItems: 'center',
    },
    locationContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderWidth: 2,
        // borderColor: 'green',
    },
    listContainer: {
        flex: 1,
        width: '100%',
        // borderWidth: 2,
        // borderColor: 'green',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    addContainer: {
        height: 70,
        width: '100%',
        // borderWidth: 2,
        // borderColor: 'blue',
        alignItems: 'flex-start',
        flexDirection: 'row',
    }
})