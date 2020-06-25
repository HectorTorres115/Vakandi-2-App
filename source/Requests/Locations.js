import gql from 'graphql-tag'

export const GetLocations = gql`
query{
    GetLocations{
      id, location
    }
}
`

export const CreateLocation = gql`
mutation createlocation($location: String!){
  CreateLocation(location: $location){
    id, location
  }
}
`
export const UpdateLocation = gql`
mutation updatelocation($id: Int!, $location: String!){
  UpdateLocation(input: {
    id: $id,
    location: $location
  }) {
    id, location
  }
}
`

export const DeleteLocation = gql`
mutation deletelocation($id: Int!){
  DeleteLocation(id: $id){
    id, location
  }
}
`