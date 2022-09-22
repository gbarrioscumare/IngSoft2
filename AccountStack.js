import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Account from '../screens/account/Account'

const Stack = createStackNavigator

export default function AccountStack () {
    return (
            <StackStackNavigator>
                <Stack.Screens
                    name = 'account'
                    component = {Account}
                    options = {{ tittle: 'Cuenta'}}
                />
            </StackStackNavigator>

    )
}
