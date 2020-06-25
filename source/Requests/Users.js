import gql from 'graphql-tag'

export const GetUsers = gql`
query{
  GetUsers{
    id, name, name2, lastName, lastName2, username, active, password, deviceToken, type
  }
}
`

export const UpdateUser = gql`
mutation updateuser($id: Int!, $type: String!, $active: Boolean!){
  UpdateUser(input: {
    id: $id,
    type: $type,
    active: $active
  }) {
    id, name, name2, lastName, lastName2, username, active, password, deviceToken, type
  }
}
`

export const LoginM = gql`
mutation login($username: String!, $password: String!){
  Login(input: {
    username: $username,
    password: $password
  }) {
    id, name, name2, lastName, lastName2, username, active, password, deviceToken, type
  }
}
`

export const RegisterM = gql`
mutation register($name: String!, $name2: String!, $lastName: String!, $lastName2: String!, $username: String!, $password: String!, $deviceToken: String!){
  CreateUser(input: {
    name: $name,
    name2: $name2,
    lastName: $lastName,
    lastName2: $lastName2,
    username: $username,
    password: $password,
    deviceToken: $deviceToken
  }) {
    id, name, name2, lastName, lastName2, username, active, password, deviceToken, type
  }
}
`

export const SetToken = gql`
mutation settoken($username: String!, $deviceToken: String!){
  SetToken(input: {
    username: $username,
    deviceToken: $deviceToken
  }) {
    id, name, name2, lastName, lastName2, username, active, password, deviceToken, type
  }
}
`