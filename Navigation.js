import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Mjreyes from '../screens/Mjreyes.js'
import Cursos from '../screens/Cursos.js'
import Search from '../screens/Search.js'
import Favorites from '../screens/Favorites.js'
import { Icon } from 'react-native-elements'
import Account from '../screens/account/Account.js'

const Tab = createBottomTabNavigator()  

export default function Navigation() {
    const screenOptions = (route, color) =>{
        let iconName
        switch (route.name) {
            case 'Inicio':
                iconName = 'home'  
            break;
            case 'Loggin':
                iconName = 'login'
            break;
            case 'Cursos':
                iconName = 'book-open-variant'
            break;
            case 'Busqueda':
                iconName = 'library'
            break;
            case 'Favoritos':
                iconName = 'star'
            break;
        }
        return (
            <Icon
                type = 'material-community'
                name = {iconName}
                size = {22}
                color = {color}
            />
        )
    }
  return (
        <NavigationContainer>
            <Tab.Navigator
                initialRoutName = 'Inicio'
                tabBarOptions = {{
                                inactiveTintColor: '#442484',
                                activeTintColor: '#a17dc3'
                }}
                screenOptions = {({ route }) => ({
                    tabBarIcon: ({ color}) => screenOptions(route, color)
                })}
            >    
                <Tab.Screen
                    name = 'Inicio'
                    component = {Mjreyes}
                    
                />

                <Tab.Screen
                    name = 'Cursos'
                    component = {Cursos}
                    
                />
                <Tab.Screen
                    name = 'Busqueda'
                    component = {Search}
                    
                />
                <Tab.Screen
                    name = 'Favoritos'
                    component = {Favorites}
                
                />
                  <Tab.Screen
                    name = 'Loggin'
                    component = {Account}
                    options = {{ tittle: 'Loggin'}} 
                />
            </Tab.Navigator>
        </NavigationContainer>
  )
}