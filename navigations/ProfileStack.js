import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'


import Profile from '../screens/Profile'


const Stack = createStackNavigator()

export default function ProfileStack() {
    return (
        <Stack.Navigator>
        <Stack.Screen
            name="profile"
            component={Profile}
            options={{
                
                title:"Perfil",
                headerStyle:{
                    backgroundColor:"#111010"
                },
                headerTintColor:"orange",
            }}
        />
    </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
