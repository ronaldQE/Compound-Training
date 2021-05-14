import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import ProgressScreen from '../screens/ProgressScreen'


const Stack = createStackNavigator()

export default function ProgressStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="progress"
                component={ProgressScreen}
                options={{title:"Progresion"}}
            />
        </Stack.Navigator>
    )
}
