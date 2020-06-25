import gql from 'graphql-tag'

export const GetLocations = gql`
query{
    GetLocations{
      id, location
    }
}
`

export const GetElements = gql`
query{
    GetElements{
       id, name, name2, lastName, lastName2, location, restday, nss, celphone, workdays
    }
}
`

export const GetElementsAlpha = gql`
query{
    GetElementsAlpha{
       id, name, name2, lastName, lastName2, location, restday, nss, celphone, workdays
    }
}
`

export const GetElementsLocation = gql`
query ($location: String!){
    GetElementsLocation(location: $location){
       id, name, name2, lastName, lastName2, location, restday, nss, celphone, workdays
    }
}
`