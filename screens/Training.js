import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import { StylesApp } from "../styles/StylesApp";
import TrainingSession from "../components/TrainingSession";
import TrainingDiscipline from "../components/TrainingDiscipline";

const Training = () => {
  return (
    <View style={StylesApp.containerScreen}>
      <TrainingDiscipline
      discipline="Caslistenia"
      nevelUser="Princitiante"
      />
      <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
        <TrainingSession 
        titleSession="CALENTAMIENTO"
        numSessionDo="4"
        numSession="4"
        />
        <TrainingSession 
        titleSession="SESION 1"
        numSessionDo="3"
        numSession="4"
        />
        <TrainingSession 
        titleSession="SESION 2"
        numSessionDo="2"
        numSession="4"
        />
        <TrainingSession 
        titleSession="SESION 3"
        numSessionDo="1"
        numSession="4"
        />
        <TrainingSession 
        titleSession="SESION 4"
        numSessionDo="0"
        numSession="4"
        />
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerComponet: {
    backgroundColor: "#C4C4C4",
    width: "100%",
    height: 135,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
  },
  container: {
    alignItems: "center",
  },
  containerTitle: {
    fontSize: 100,
    flex: 3,
    alignContent: "center",
  },
  containerBouton: {
    borderColor: "#FFA500",
    borderStyle: "solid",
    borderWidth: 2,
    color: "#FFFFFF",
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    alignContent: "center",
    borderRadius: 20,
  },
  containerCount: {
    fontSize: 20,
    borderRadius: 10,
    //flex:1,
    alignItems: "flex-end",
    marginRight: 0,
    paddingRight: 10,
  },
});
export default Training;
