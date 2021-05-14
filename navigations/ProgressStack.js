import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Progress from '../screens/Progress'


const Stack = createStackNavigator()

export default function ProgressStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="progress"
                component={Progress}
                options={{
                    title:"Progresion",
                    headerStyle:{
                        backgroundColor:"#111010"
                    },
                    headerTintColor:"orange",
                }}
            />
        </Stack.Navigator>
    )
}
