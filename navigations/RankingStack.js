import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import RankingScreen from '../screens/RankingScreen'


const Stack = createStackNavigator()

export default function RankingStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Logros"
                component={RankingScreen}
                options={{title:"Ranking"}}
            />
        </Stack.Navigator>
    )
}
