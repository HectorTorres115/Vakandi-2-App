import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.4)',
    },
    text: {
        fontSize: 20,
        color: 'white',
        // fontWeight: 'bold'
    },
    buttonContainer: {
        // flex: 1/9,
        // borderWidth: 2,
        // borderColor: 'green',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    listContainer: {
        flex: 8/9,
        width: '100%',
        // borderWidth: 2,
        // borderColor: 'green',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    abc: {
        flex: 1, 
        height: 35, 
        backgroundColor: 'rgba(255, 0, 0, 1)', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    todo: {
        flex: 1, 
        height: 35, 
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'rgba(0, 0, 0, 1)', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    elementCard: {
        flex: 1,
        height: 70,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2
    }
})