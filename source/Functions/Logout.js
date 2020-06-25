import {BackHandler, Alert} from 'react-native'
import {DeleteLog} from '../Functions/Logged'
import UserStore from '../Redux/Redux-user-store'
import {set_user} from '../Redux/Redux-actions'

export const backAction = () => {
    Alert.alert("¿Cerrar sesión?", "", [
      { text: "Confirmar", onPress: async() => {
        UserStore.dispatch(set_user({}))
        await DeleteLog()
        // BackHandler.exitApp()
      } },
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel"
      }
    ]);
    return true;
};

export const handleAndroidBackButton = (callback) => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      backAction();
      return true;
    });
};


export const removeAndroidBackButtonHandler = () => {
    BackHandler.removeEventListener('hardwareBackPress', () => {});
}