import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.4)'
    },
    field: {
        fontSize: 20,
        margin: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 20,
        margin: 10,
        color: 'black',
        // fontWeight: 'bold'
    },
    textBtn: {
        fontSize: 20,
        color: 'white',
        margin: 20
        // fontWeight: 'bold'
    },
    listContainer: {
        flex: 1,
        height: '100%',
        borderWidth: 2,
        borderColor: 'green',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    card: {
        flex: 1,
        height: 300,
        // backgroundColor: 'rgb(5, 141, 131)',
        backgroundColor: '#ebeef2',
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        // marginBottom: 0,
        borderRadius: 10
    },
    buttonContainer: {
        flex: 1, 
        // borderColor: 'green', 
        // borderWidth: 2, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '100%'
    },
})