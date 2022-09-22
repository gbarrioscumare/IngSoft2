import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Search from '../screens/Search'

const Stack = createStackNavigator

export default function () {
    return (
            <Stack.createStackNavigator>
                <Stack.Screen
                    name = ''
                    component = {Search}
                    options = {{ tittle: 'inicio'}}
                />
            </Stack.createStackNavigator>

    )
}
