import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Cursos from '../screens/Cursos'

const Stack = createStackNavigator

export default function () {
    return (
            <Stack.createStackNavigator>
                <Stack.Screen
                    name = ''
                    component = {Cursos}
                    options = {{ tittle: 'inicio'}}
                />
            </Stack.createStackNavigator>

    )
}
