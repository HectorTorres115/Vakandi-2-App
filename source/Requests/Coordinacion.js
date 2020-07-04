import gql from 'graphql-tag'

export const AskLocactions = gql`
mutation{
  AskLocation
}
`

export const LocationsListener = gql`
subscription{
  LocationsListener{
    message, longitude, latitude, user, type
  }
}
`