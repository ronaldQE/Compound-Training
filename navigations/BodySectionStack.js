import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import BodySectionScreen from '../screens/BodySectionScreen'


const Stack = createStackNavigator()

export default function BodySectionStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="localizados"
                component={BodySectionScreen}
                options={{title:"Ejercicios Localizados"}}
            />
        </Stack.Navigator>
    )
}
