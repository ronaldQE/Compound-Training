import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'
import  UserList from './screens/UserList';
import  UserDetail from './screens/UserDetail';
import  CreateUser from './screens/CreateUser';

  const Stack = createStackNavigator()
function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name= "CreateUser"component={CreateUser}/>
      <Stack.Screen name="UserList" component={UserList}/>
      <Stack.Screen name= "UserDetail"component={UserDetail}/>
      
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
