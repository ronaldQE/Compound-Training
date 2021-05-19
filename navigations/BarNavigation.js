import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

import TrainingStack from './TrainingStack';
import ProgressStack from './ProgressStack';
import RankingStack from './RankingStack';
import LogrosStack from './LogrosStack';
import BodySectionStack from './BodySectionStack';
import ProfileStack from './ProfileStack';
import TrainingView from '../screens/TrainingView';


const Tab = createBottomTabNavigator()

export default function BarNavigation() {
   
    const viewOptions = (route, color)=>{
        let iconName
        switch (route.name) {
            case "inicio":
                iconName = "arm-flex"
                break;
            case "progresion":
                iconName = "chart-areaspline"
                break;
            case "ranking":
                iconName = "elevator-passenger"
                break;
            case "logros":
                iconName = "trophy"
                break;
            case "exerciseSession":
                iconName = "dumbbell"
                break;
            case "profile":
                iconName = "account-box"
                break;
            
            default:
                break;
        }

        return(
            <Icon
                type="material-community"
                name={iconName}
                siza={50}
                color={color}
            />
        )
    }


    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="inicio"
                tabBarOptions={{
                    inactiveTintColor:"#ffffff",
                    activeTintColor:"orange",
                    style:{
                        backgroundColor:'#111010',
                        borderTopColor:'#111010'
                    }
                }}
                screenOptions={({route})=>({
                    tabBarIcon:({color})=> viewOptions(route, color)
                })}
            >
                <Tab.Screen
                    name="inicio"
                    component={TrainingView}
                    options={{ title:"Ejercicios" }}
                />
               <Tab.Screen
                    name="progresion"
                    component={ProgressStack}
                    options={{ title: "Progrecion" }}
                />
                <Tab.Screen
                    name="ranking"
                    component={RankingStack}
                    options={{ title: "Ranking" }}
                />
                <Tab.Screen
                    name="logros"
                    component={LogrosStack}
                    options={{ title: "Logros" }}
                />
                <Tab.Screen
                    name="exerciseSession"
                    component={BodySectionStack}
                    options={{ title: "Localizado" }}
                />
                <Tab.Screen
                    name="profile"
                    component={ProfileStack}
                    options={{ title: "Perfil" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );

    
}

const styles = StyleSheet.create({
    barContainer:{
        backgroundColor: '#212121'
    }
})
