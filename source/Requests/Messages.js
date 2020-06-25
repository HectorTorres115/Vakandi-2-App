import gql from 'graphql-tag'

export const GetMessagesQ = gql`
query getmessages($type: String!){
    GetMessages(type: $type){
      id, user, message, type, longitude, latitude, date, hour
    }
}	
`

export const CreateMessageM = gql`
mutation ceeatemessage($user: String!, $message: String!, $type: String!, $longitude: Float!, $latitude: Float!){
    CreateMessage(input: {
      user: $user,
      message: $message,
      type: $type,
      longitude: $longitude,
      latitude: $latitude
    }) {
      id, user, message, type, longitude, latitude, date, hour
    }
}
`

export const PartesUpdated = gql`
subscription{
    PartesUpdated{
      id, user, message, type, longitude, latitude, date, hour
    }
  }
`

export const PanicsUpdated = gql`
subscription{
    PanicsUpdated{
      id, user, message, type, longitude, latitude, date, hour
    }
  }
`

export const AlertsUpdated = gql`
subscription{
    AlertsUpdated{
      id, user, message, type, longitude, latitude, date, hour
    }
  }
`