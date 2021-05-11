import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator()

import HomeUser from './screens/HomeScreen';
import RankingUsers from './screens/RankingScreen';
import ProgressUser from './screens/ProgressScreen';
import AchievementsUser from './screens/LogrosScreen';
import BodySection from './screens/BodySectionScreen';

 

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="HomeUser" component={HomeUser}/>
      <Stack.Screen name="ProgressUser" component={ProgressUser}/>
      <Stack.Screen name="RankingUsers" component={RankingUsers}/>
      <Stack.Screen name="AchievementsUser" component={AchievementsUser}/>
      <Stack.Screen name="BodySection" component={BodySection}/>

    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
