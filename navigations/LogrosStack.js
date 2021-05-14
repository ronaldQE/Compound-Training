import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LogrosScreen from '../screens/LogrosScreen'


const Stack = createStackNavigator()

export default function LogrosStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="logros"
                component={LogrosScreen}
                options={{title:"Logros"}}
            />
        </Stack.Navigator>
    )
}
