import gql from 'graphql-tag'

export const AskLocactions = gql`
mutation asklocations($asker: String!){
    AskLocations(asker: $asker)
  }
`