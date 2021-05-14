
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator()

import BarNavigation from './navigations/BarNavigation';
//import BarNavigation from './navigations/BarNavigation';

 

// function MyStack(){
//   return(
//     <Stack.Navigator>
      
//       <Stack.Screen name="HomeUser" component={HomeUser}/>
//       <Stack.Screen name="ProgressUser" component={ProgressUser}/>
//       <Stack.Screen name="RankingUsers" component={RankingUsers}/>
//       <Stack.Screen name="AchievementsUser" component={AchievementsUser}/>
//       <Stack.Screen name="BodySection" component={BodySection}/>

//     </Stack.Navigator>
//   )
// }

export default function App() {
  return (
    
      <BarNavigation/>
    
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
