import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen'


const Stack = createStackNavigator()

export default function HomeStack() {
    return (
        <Stack.Navigator
        
        >
            
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{
                    title:"Ejercitar Sesiones",
                    headerStyle:{
                        backgroundColor:"#111010"
                    },
                    headerTintColor:"orange",
                }}
                
            />
        </Stack.Navigator>
    )
}
