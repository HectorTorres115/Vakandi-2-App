import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//Clients
import {ApolloProvider} from 'react-apollo'
import {client} from './source/Clients/client'
//Auth stack
import {Login} from './source/Screens/Login'
import {Register} from './source/Screens/Register'
//Remember account
import {GetLog} from './source/Functions/Logged'
//Admin stack
import {Main} from './source/Screens/Main'
import {Element} from './source/Screens/Element'
import {Coordinacion} from './source/Screens/Coordinacion'
import {ShowLocation} from './source/Screens/ShowLocation'
import {Config} from './source/Screens/Config'
import {Locations} from './source/Screens/Locations'
import {Estado} from './source/Screens/Estado'
import {Parte} from './source/Screens/Parte'
import {Panic} from './source/Screens/Panic'
import {Alert} from './source/Screens/Alert'
import {Users} from './source/Screens/Users'
//Components in stack
import {ShowElement} from './source/Components/ShowElement'
//User store
import UserStore from './source/Redux/Redux-user-store'

const AdminStack = createStackNavigator();
const AuthStack = createStackNavigator();

const AdminStackScreen = () => (
  <AdminStack.Navigator headerMode = 'none'>
    <AuthStack.Screen name = 'Main' component = {Main}/> 
    <AdminStack.Screen name = 'Element' component = {Element}/> 
    <AdminStack.Screen name = 'Coordinacion' component = {Coordinacion}/> 
    <AdminStack.Screen name = 'ShowLocation' component = {ShowLocation}/> 
    <AdminStack.Screen name = 'Config' component = {Config}/> 
    <AdminStack.Screen name = 'Locations' component = {Locations}/> 
    <AdminStack.Screen name = 'Estado' component = {Estado}/> 
    <AdminStack.Screen name = 'Parte' component = {Parte}/>
    <AdminStack.Screen name = 'Panic' component = {Panic}/>
    <AdminStack.Screen name = 'Alert' component = {Alert}/>
    <AdminStack.Screen name = 'Users' component = {Users}/>
    <AdminStack.Screen name = 'ShowElement' component = {ShowElement}/> 
  </AdminStack.Navigator>
)

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode = 'none'>
    <AuthStack.Screen name = 'Login' component = {Login}/>
    <AuthStack.Screen name = 'Register' component = {Register}/> 
  </AuthStack.Navigator>
)

export default () => {
  //Component did mount
  let isLogged;
  React.useEffect(async() => {
    isLogged = await GetLog();
    setLogged(isLogged)
    console.log(isLogged)
  }, [])
  const [logged, setLogged] = React.useState(isLogged);
  
  UserStore.subscribe(async() => {
    setLogged(UserStore.getState().active)
    console.log(isLogged)
  })

  if(logged) {
    return(
      <ApolloProvider client = {client}>
        <NavigationContainer>
          <AdminStackScreen/>
        </NavigationContainer>
      </ApolloProvider>
    )
  } else {
    return (
      <ApolloProvider client = {client}>
        <NavigationContainer>
          <AuthStackScreen/>
        </NavigationContainer>
      </ApolloProvider>
    )
  }
 }