import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'
import  UserDiscipline from './screens/UserDiscipline';
import  UserLevel from './screens/UserLevel';
import  CreateUser from './screens/CreateUser';
import UserGoals from './screens/UserGoals';
import UserList from './screens/UserList'
  const Stack = createStackNavigator()
function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name= "UserList"component={UserList}/>
      <Stack.Screen name= "CreateUser"component={CreateUser}/>
       <Stack.Screen name= "UserLevel"component={UserLevel}/>
      <Stack.Screen name= "UserGoals"component={UserGoals}/>
       <Stack.Screen name="UserDiscipline" component={UserDiscipline}/>
     
      
     
     
      
    </Stack.Navigator>
  );

}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#0E1110',
  },


  
  
});
