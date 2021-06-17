import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import TrainingSessionPlay from "./TrainigSessionPlay";
//import Training from "./Training";
import TrainingSessionStart from "./TrainingSessionStart";
import BodySection from "./BodySection";

const Stack = createStackNavigator();
const BodySectionView = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={BodySection}
        options={{
          title: "Ejercitar Sesiones",
          headerStyle: {
            backgroundColor: "#111010",
          },
          headerTintColor: "#f1f1f1",
        }}
      />
      <Stack.Screen
        name="start"
        component={TrainingSessionStart}
        options={{
          title: "Iniciar Sesiones",
          headerStyle: {
            backgroundColor: "#111010",
          },
          headerTintColor: "#f1f1f1",
        }}
      />
      <Stack.Screen
        name="sessionPlay"
        component={TrainingSessionPlay}
        options={{
          title: "Iniciar Sesiones",
          headerStyle: {
            backgroundColor: "#111010",
          },
          headerTintColor: "#f1f1f1",
        }}
      />
    </Stack.Navigator>
  );
};

export default BodySectionView;

//const styles = StyleSheet.create({})
