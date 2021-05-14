import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Attainment from '../screens/Attainment'


const Stack = createStackNavigator()

export default function LogrosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="logros"
                component={Attainment}
                options={{
                    title:"Logros",
                    headerStyle:{
                        backgroundColor:"#111010"
                    },
                    headerTintColor:"orange",
                }}
            />
        </Stack.Navigator>
    )
}
