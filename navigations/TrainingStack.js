import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'

import Training from '../screens/Training'
import {StylesApp} from '../styles/StylesApp';



const Stack = createStackNavigator()

export default function TrainingStack() {
    return (
        <Stack.Navigator
        
        >
            
            <Stack.Screen
                name="home"
                component={Training}
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
