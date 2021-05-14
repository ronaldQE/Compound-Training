import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import BodySection from '../screens/BodySection'


const Stack = createStackNavigator()

export default function BodySectionStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="localizados"
                component={BodySection}
                options={{
                    title:"Ejercicios Localizados",
                    headerStyle:{
                        backgroundColor:"#111010"
                    },
                    headerTintColor:"orange",
                }}
            />
        </Stack.Navigator>
    )
}
