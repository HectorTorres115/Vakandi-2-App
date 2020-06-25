import gql from 'graphql-tag'

export const CreateElement = gql`
mutation createelement($name: String, $name2: String, $lastName: String, $lastName2: String $location: String, $restday: String, $nss: String, $celphone: String){
    CreateElement(input: {
      name: $name,
      name2: $name2,
      lastName: $lastName,
      lastName2: $lastName2,
      location: $location,
      restday: $restday,
      nss: $nss,
      celphone: $celphone
    }) {
      id, name, name2, lastName, lastName2, location, restday, nss, celphone, workdays
    }
}
`

export const UpdateElement = gql`
mutation createelement($id: Int!, $location: String!){
  UpdateElement(input: {
    id: $id
    location: $location
  }) {
    id, name, name2, lastName, lastName2, location, restday, nss, celphone, workdays
  }
}
`

export const AddWorkday = gql`
mutation addworkday($id: Int!){
  AddWorkDay(id: $id){
    id, name, name2, lastName, lastName2, location, restday, nss, celphone, workdays
  }
}
`