import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ProgressScreen from '../screens/ProgressScreen';
import RankingScreen from '../screens/RankingScreen';
import LogrosScreen from '../screens/LogrosScreen';
import BodySectionScreen from '../screens/BodySectionScreen';


const Tab = createBottomTabNavigator()

export default function BarNavigation() {



    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Inicio"
                    component={HomeScreen}
                    option={{ title: "Home" }}
                />
               <Tab.Screen
                    name="Progresion"
                    component={ProgressScreen}
                    option={{ title: "Home" }}
                />
                <Tab.Screen
                    name="Rancking"
                    component={RankingScreen}
                    option={{ title: "Home" }}
                />
                <Tab.Screen
                    name="Logros"
                    component={LogrosScreen}
                    option={{ title: "Home" }}
                />
                <Tab.Screen
                    name="Seccion"
                    component={BodySectionScreen}
                    option={{ title: "Home" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );

}


