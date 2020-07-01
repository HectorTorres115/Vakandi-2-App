import {Alert} from 'react-native'
import {DeleteLog} from '../Functions/Logged'
import UserStore from '../Redux/Redux-user-store'
import {set_user} from '../Redux/Redux-actions'

export const backAction = () => {
    Alert.alert("¿Cerrar sesión?", "", [
      { text: "Confirmar", onPress: async() => {
        UserStore.dispatch(set_user({}))
        await DeleteLog()
      } },
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel"
      }
    ]);
    return true;
};