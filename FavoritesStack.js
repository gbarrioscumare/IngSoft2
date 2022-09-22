import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Favorites from '../screens/Favorites'

const Stack = createStackNavigator

export default function () {
    return (
            <Stack.createStackNavigator>
                <Stack.Screen
                    name = ''
                    component = {Favorites}
                    options = {{ tittle: 'inicio'}}
                />
            </Stack.createStackNavigator>

    )
}
