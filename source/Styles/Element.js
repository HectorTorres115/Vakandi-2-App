import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    headerTitle: {
        fontSize: 20,
        color: 'white',
        margin: 20
    },
    container: {
        height: 1100,
        width: '100%',
        // backgroundColor: 'rgb(20,59,83)',
        backgroundColor: 'black',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    personalData: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgb(5, 141, 131)',
        margin: 10,
        borderRadius: 10
    },
    text: {
        fontSize: 22,
        color: 'white',
        margin: 10,
    },
    label: {
        fontSize: 22,
        color: 'white',
        marginLeft: 10
    },
    inputContainer: {
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: 'rgb(5, 141, 131)',
        // borderColor: 'green',
        // borderWidth: 2,
        margin: 5,
        marginLeft: 20
    },
    input: {
        fontSize: 20,
        backgroundColor: 'white',
        color: 'black',
        width: '90%',
        margin: 10,
        borderRadius: 10
    },
    btnRegister: {
        // flex: 1,
        backgroundColor: 'darkblue',
        borderWidth: 2,
        borderColor: 'white',
        height: 70,
        borderRadius: 10,
        width: '90%',
        alignItems: "center",
        justifyContent: "center"
    },
    btnText: {
        fontSize: 20,
        color: 'white',
        margin: 10
    }
})