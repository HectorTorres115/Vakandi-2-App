import React, { Component } from 'react'
import {ActivityIndicator} from 'react-native'
import {subClient} from '../Clients/sub-client'
import {ApolloProvider, Subscription} from 'react-apollo'
import {PartesUpdated, PanicsUpdated, AlertsUpdated} from '../Requests/Messages'

export class AlertListener extends Component {
    render() {
        return (
            <ApolloProvider client = {subClient}>
            <Subscription subscription = {AlertsUpdated}
            onSubscriptionData = {(data) => {
                console.log(data.subscriptionData.data.AlertsUpdated)
                const newArray = [...this.props.alerts, data.subscriptionData.data.AlertsUpdated]
                this.props.setter(newArray)
            }}>
            {({loading, error}) => {
                if(loading) return null
                if(error) return <ActivityIndicator size = 'large' color = 'red'/>
                return null
            }}
            </Subscription>
            </ApolloProvider>
        )
    }
}

export class PanicListener extends Component {
    render() {
        return (
            <ApolloProvider client = {subClient}>
            <Subscription subscription = {PanicsUpdated}
            onSubscriptionData = {(data) => {
                console.log(data.subscriptionData.data.PanicsUpdated)
                const newArray = [...this.props.panics, data.subscriptionData.data.PanicsUpdated]
                this.props.setter(newArray)
            }}>
            {({loading, error}) => {
                if(loading) return null
                if(error) return <ActivityIndicator size = 'large' color = 'red'/>
                return null
            }}
            </Subscription>
            </ApolloProvider>
        )
    }
}

export class ParteListener extends Component {
    render() {
        return (
            <ApolloProvider client = {subClient}>
            <Subscription subscription = {PartesUpdated}
            onSubscriptionData = {(data) => {
                console.log(data.subscriptionData.data.PartesUpdated)
                const newArray = [...this.props.partes, data.subscriptionData.data.PartesUpdated]
                this.props.setter(newArray)
            }}>
            {({loading, error}) => {
                if(loading) return null
                if(error) return <ActivityIndicator size = 'large' color = 'red'/>
                return null
            }}
            </Subscription>
            </ApolloProvider>
        )
    }
}