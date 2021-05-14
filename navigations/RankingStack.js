import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Ranking from '../screens/Ranking'


const Stack = createStackNavigator()

export default function RankingStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Logros"
                component={Ranking}
                options={{
                    title:"Ranking",
                    headerStyle:{
                        backgroundColor:"#111010"
                    },
                    headerTintColor:"orange",
                }}
            />
        </Stack.Navigator>
    )
}
