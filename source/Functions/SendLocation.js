import LocationStore from '../Redux/Redux-location-store'
import {GetUser} from '../Functions/UserStorage'
import {url, port} from '../Clients/image-client'

export const SendLocation = async() => {
    const user = await GetUser()
    const userObj = JSON.parse(user)
    const query = JSON.stringify({
        query: `
        mutation{
            SendLocation(input: {
              message: "Test",
              longitude: ${LocationStore.getState().longitude},
              latitude: ${LocationStore.getState().latitude},
              user: "${userObj.username}",
              type: "Test"
            }) {
              message, longitude, latitude, user, type
            }
          }
        `
    })
    const response = await fetch(`http://${url}:${port}/graphql`, {
        headers: {'content-type': 'application/json'},
        method: 'POST',
        body: query,
    });
    const responseJson = await response.json();
    return responseJson
}