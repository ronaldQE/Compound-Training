import color from "color";
import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"



const TrainingSession = (props) => {
  const navigation=useNavigation();
  return (
    <View style={styles.containerComponet}>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={{ fontSize: 30, padding: 10, color: "#F1F1F1" }}>
            CALENTAMIENTO
          </Text>
        </View>
        <View>
          <TouchableOpacity 
          style={styles.containerBouton} 
          onPress={()=>navigation.navigate('start')}
          >
            <Text style={{ fontSize: 20, color: "#FFA500" }}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerCount}>
        <Text style={{ fontSize: 24, color: "#F1F1F1" }}>2/4</Text>
      </View>
    </View>
  );
};

export default TrainingSession;

const styles = StyleSheet.create({
  containerComponet: {
    backgroundColor: "#242424",
    width: "100%",
    height: 135,
    borderRadius: 5,
    marginBottom: 20,
    padding: 5,

  },
  container: {
    alignItems: "center",
  },
  containerTitle: {
    fontSize: 100,
    //flex: 3,
    alignContent: "center",
    color: "#F1F1F1",

  },
  containerBouton: {
    color: "#FFA500",
    borderColor: "#FFA500",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
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
    marginTop:-10,
  },
});
